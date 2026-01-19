import { test, expect } from '@playwright/test';
import { GenerationUtils } from '@siddheshwar.anajekar/common-base';

test('print total amount', async ({ page }) => {
  const result = GenerationUtils.getTotalAmount(5, 10, 100);

  console.log('Total Amount:', result);
});