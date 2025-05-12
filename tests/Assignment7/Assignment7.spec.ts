import { todo } from 'node:test';
import { test } from './ass7.ts';
import { expect } from '@playwright/test';

test.describe("Assignment 7 on practice.expandtesting for fixtures and login handling", () => {
    test("Todopage Fixture checking", async ({ todopage }) => {
        
        //Here we have use fixtures to login to the page
        // and then we are checking the URL of the page
        await expect(todopage).toHaveURL("https://practice.expandtesting.com/secure");
    });
});