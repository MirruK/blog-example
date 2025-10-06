FROM node:current-alpine AS builder

WORKDIR /app

# Copy package files first (for caching)
COPY package.json pnpm-lock.yaml ./

ARG CI

RUN npm install -g pnpm && pnpm install

# Copy source code
COPY . .

# Build Next.js project
RUN pnpm run build

# GraphQL codegen
RUN --mount=type=secret,id=GITHUB_API_TOKEN \
    GITHUB_API_TOKEN=$(cat /run/secrets/GITHUB_API_TOKEN) \
    pnpm run codegen

# Create production image
FROM node:current-alpine AS runner

WORKDIR /app

# Install only production dependencies
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --prod --frozen-lockfile --no-optional

# Copy built Next.js output
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

ENV NODE_ENV=production

CMD ["npm", "start"]
