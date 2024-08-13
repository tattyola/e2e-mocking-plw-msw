import { test as base, expect } from '@playwright/test';
import { http } from 'msw';
import {MockServiceWorker} from 'playwright-msw';
import { createWorkerFixture } from 'playwright-msw';
import handlers from './mocks/handlers';

// lets say we have env variable MOCKS
const MOCKS = true;
const USE_MOCKS = MOCKS === true;

const handlerExistsForUrl = (urls: string | string[]): boolean => {
    const urlArray = Array.isArray(urls) ? urls : [urls];
    return urlArray.every(url => {
        return handlers.some(handler => {
            return handler.info.path === url;
        });
    });
};

const checkHandlerPresence = (endpoints: string | string[]) => {
    if (USE_MOCKS && !handlerExistsForUrl(endpoints)) {
        throw new Error(`Handler for one or more endpoints does not exist`);
    }
};

const test = base.extend<{
    worker: MockServiceWorker | undefined;
    http: typeof http | undefined;
}>({
    worker: USE_MOCKS ? createWorkerFixture(handlers) : undefined,
    http: USE_MOCKS ? http : undefined
});

export { expect, test, checkHandlerPresence };

