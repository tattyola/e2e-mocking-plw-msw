import { test as base, expect } from '@playwright/test';
import { http } from 'msw';
import type { MockServiceWorker } from 'playwright-msw';
import { createWorkerFixture } from 'playwright-msw';
import handlers from './mocks/handlers';

// lets say we have env variable MOCKS
const MOCKS = true;
// @ts-ignore
const USE_MOCKS = MOCKS === true;

const test = base.extend<{
    worker: MockServiceWorker | undefined;
    http: typeof http | undefined;
}>({
    worker: USE_MOCKS ? createWorkerFixture(handlers) : undefined,
    http: USE_MOCKS ? http : undefined,
});

export { expect, test };

