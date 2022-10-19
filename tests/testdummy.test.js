// @ts-check
const { test, expect, chromium } = require("@playwright/test");
const { Browser } = require("selenium-webdriver");

test.describe("dummy test project", () => {
  test("User checks if all the thumbnail images are loaded and visible", async ({
    page,
  }) => {
    // Go to https://testdummy.komi.io/
    await page.goto("https://testdummy.komi.io/");

    // Click text=ACCEPT
    await page.locator("text=ACCEPT").click();

    await page
      .locator("//div[@class='talent-detail__header']//img[2]")
      .isVisible();

    //first image
    await expect(
      page.locator("//div[@class='talent-detail__header']//img[2]")
    ).toBeVisible();

    //check instagram image visibility
    await expect(
      page.locator(
        "//div[@class='ant-row ant-row-center ant-row-middle talent-detail__social m__t--16']//div[1]//button[1]//*[name()='svg']"
      )
    ).toBeVisible();

    //check linkedin image visibility
    await expect(
      page.locator(
        "//div[@class='ant-row ant-row-center ant-row-middle talent-detail__social m__t--16']//div[2]//button[1]//*[name()='svg']"
      )
    ).toBeVisible();

    //check spotify image visibility
    await expect(
      page.locator(
        "//div[@class='ant-row ant-row-center ant-row-middle talent-detail__social m__t--16']//div[3]//button[1]//*[name()='svg']"
      )
    ).toBeVisible();

    //check music image visibility
    await expect(
      page.locator(
        "//div[@class='ant-row ant-row-center ant-row-middle talent-detail__social m__t--16']//div[4]//button[1]//*[name()='svg']"
      )
    ).toBeVisible();

    //seven nation army visibility
    await expect(
      page.locator(
        "//div[@id='0a4b6f76-79a3-4f01-8505-2671d340d17a']//div[@class='swiper-slide swiper-slide-active']//img[2]"
      )
    ).toBeVisible();

    //radio head visibility
    await expect(
      page.locator(
        "(//img[@src='https://i.scdn.co/image/ab67616d0000b273df55e326ed144ab4f5cecf95'])[1]"
      )
    ).toBeVisible();

    //
    //woman image visibility
    await expect(
      page.locator(
        "(//img[@src='https://i.scdn.co/image/ab67616d0000b2734df3245f26298a1579ecc321'])[1]"
      )
    ).toBeVisible();

    //
    //hygeine image visibility
    await expect(
      page.locator(
        "(//img[@src='https://i.scdn.co/image/ab67616d0000b273b4c5982e1b92f97a126fc18c'])[1]"
      )
    ).toBeVisible();

    //
    //cartoon image visibility
    await expect(
      page.locator(
        "(//img[@src='https://images.komi.io/production/photos/rSXzEWKxYiNOH3qkIqoWw.jpeg?tr=h-480%2Cw-480,f-auto'])[1]"
      )
    ).toBeVisible();

    //subscribe image visibility
    await expect(
      page.locator(
        "(//img[@src='https://images.komi.io/production/photos/V6TFWD5Kr4qFl3bDhOYhP.jpeg?tr=h-480%2Cw-480,f-auto'])[1]"
      )
    ).toBeVisible();

    //latest singles image1 visibility
    await expect(
      page.locator(
        "(//img[@src='https://i.scdn.co/image/ab67616d0000b2732e362b1d576395015a8bc494'])[1]"
      )
    ).toBeVisible();

    //latest singles image2 visibility
    await expect(
      page.locator(
        "(//img[@src='https://i.scdn.co/image/ab67616d0000b273933c843e4b90dbf322af42ad'])[1]"
      )
    ).toBeVisible();

    //new video youtube visibility
    await expect(
      page.locator(
        "(//img[@src='https://i.ytimg.com/vi/c0-hvjV2A5Y/hqdefault.jpg'])[1]"
      )
    ).toBeVisible();
  });

  test("check links navigate to correct position", async ({ page }) => {
    // Go to https://testdummy.komi.io/
    await page.goto("https://testdummy.komi.io/");

    // Click text=ACCEPT
    await page.locator("text=ACCEPT").click();

    // Click button:has-text("Single Music")
    await page.locator('button:has-text("Single Music")').click();
    await expect(page).toHaveURL(
      "https://testdummy.komi.io/#e7729fbc-edb6-41de-951d-23784df5b1ce"
    );

    // Click button:has-text("Music Tracks")
    await page.locator('button:has-text("Music Tracks")').click();
    await expect(page).toHaveURL(
      "https://testdummy.komi.io/#0a4b6f76-79a3-4f01-8505-2671d340d17a"
    );

    // Click button:has-text("Pre-Save Music")
    await page.locator('button:has-text("Pre-Save Music")').click();
    await expect(page).toHaveURL(
      "https://testdummy.komi.io/#b6703040-7153-4c43-b098-8c97ef10d31b"
    );

    // Click button:has-text("Subscribe")
    await page.locator('button:has-text("Subscribe")').click();
    await expect(page).toHaveURL(
      "https://testdummy.komi.io/#05b63f8b-4fdc-4581-a709-8c1cd882f3fb"
    );

    // Click button:has-text("Latest Singles")
    await page.locator('button:has-text("Latest Singles")').click();
    await expect(page).toHaveURL(
      "https://testdummy.komi.io/#f3b93dae-3835-4fec-9d40-9f26fa5b023a"
    );

    // Click button:has-text("New Video")
    await page.locator('button:has-text("New Video")').click();
    await expect(page).toHaveURL(
      "https://testdummy.komi.io/#a3559ba5-b206-425c-83a2-a05010f726f2"
    );
  });

  test("User clicks on the side navigation arrow on the â€Music Tracksâ€ module and validates the paging and data.", async ({
    page,
  }) => {
    // Go to https://testdummy.komi.io/
    await page.goto("https://testdummy.komi.io/");

    // Click text=ACCEPT
    await page.locator("text=ACCEPT").click();

    // Click div:nth-child(2) > button:nth-child(2)
    await page.locator("div:nth-child(2) > button:nth-child(2)").click();

    // Click div:nth-child(2) > button:nth-child(2)
    await page.locator("div:nth-child(2) > button:nth-child(2)").click();

    // Click .p__b--20 > .ant-row > div:nth-child(2) > button >> nth=0
    await page
      .locator(".p__b--20 > .ant-row > div:nth-child(2) > button")
      .first()
      .click();

    // Click .p__b--20 > .ant-row > div:nth-child(2) > button >> nth=0
    await page
      .locator(".p__b--20 > .ant-row > div:nth-child(2) > button")
      .first()
      .click();

    // Click text=Seven Nation Army
    await page.locator("text=Seven Nation Army").click();

    // Click text=Woman
    await page.locator("text=Woman").click();

    // Click div:nth-child(2) > button:nth-child(2)
    await page.locator("div:nth-child(2) > button:nth-child(2)").click();

    // Click text=Creep
    await page.locator("text=Creep").click();

    // Click text=Halo >> nth=0
    await page.locator("text=Halo").first().click();

    // Click div:nth-child(2) > button:nth-child(2)
    await page.locator("div:nth-child(2) > button:nth-child(2)").click();

    // Click text=Mosaïque
    await page.locator("text=Mosaïque").click();
  });

  test("User clicks on Pre-Save button and validates the button changes to Pre-saved", async ({
    page,
  }) => {
    // Go to https://testdummy.komi.io/
    await page.goto("https://testdummy.komi.io/");

    // Click text=ACCEPT
    await page.locator("text=ACCEPT").click();

    await expect(
      page.locator('//span[normalize-space()="Pre-save"]')
    ).toBeVisible();

    await page.click('//span[normalize-space()="Pre-save"]');

    await expect(
      page.locator('//span[normalize-space()="Pre-saved"]')
    ).toBeVisible();
  });

  test("User clicks on a Youtube video and asserts that it redirects successfully", async ({
    page,
  }) => {
    // Go to https://testdummy.komi.io/
    await page.goto("https://testdummy.komi.io/");

    // Click text=ACCEPT
    await page.locator("text=ACCEPT").click();

    await expect(
      page.locator('//*[name()="circle" and contains(@opacity,".3")]')
    ).toBeVisible();
    await page.waitForTimeout(2000);

    await page.click('//*[name()="circle" and contains(@opacity,".3")]');
    await page.waitForTimeout(2000);

    await page.hover("//*[@id='movie_player']/div[3]/div[2]/div/a");

    await page.waitForTimeout(1000);

    const url = await page.url();
    await expect(page.url).toEqual(
      "https://www.youtube.com/watch?v=c0-hvjV2A5Y&t=840s"
    );
  });

  test("Clicks on the More button in the Single Music module: validates and redirects to all relevant links. ", async ({
    page,
  }) => {
    // Go to https://testdummy.komi.io/
    await page.goto("https://testdummy.komi.io/");

    // Click text=ACCEPT
    await page.locator("text=ACCEPT").click();

    // Click button:has-text("More")
    await page.locator('button:has-text("More")').click();

    // Click [aria-label="spotify-play-button"]
    const [page1] = await Promise.all([
      page.waitForEvent("popup"),
      page.locator('[aria-label="spotify-play-button"]').click(),
    ]);
    await expect(page).toHaveURL(
      "https://open.spotify.com/track/57f2cCxf67aA6BtD6Y8wbR"
    );

    // Click [aria-label="apple_music-play-button"]
    const [page2] = await Promise.all([
      page.waitForEvent("popup"),
      page.locator('[aria-label="apple_music-play-button"]').click(),
    ]);
    await expect(page).toHaveURL("https://testdummy.komi.io/music/silberfisch");
    // Click [aria-label="youtube_music-play-button"]
    const [page3] = await Promise.all([
      page.waitForEvent("popup"),
      page.locator('[aria-label="youtube_music-play-button"]').click(),
    ]);
    await expect(page).toHaveURL(
      "https://music.youtube.com/watch?v=XckgU_MurkU"
    );

    // Click [aria-label="deezer-play-button"]
    const [page4] = await Promise.all([
      page.waitForEvent("popup"),
      page.locator('[aria-label="deezer-play-button"]').click(),
    ]);
    await expect(page).toHaveURL("https://www.deezer.com/us/track/16097367");
  });

  test("User clicks on a Subscription module and fills the form successfully ", async ({
    page,
  }) => {
    // Go to https://testdummy.komi.io/
    await page.goto("https://testdummy.komi.io/");

    // Click text=ACCEPT
    await page.locator("text=ACCEPT").click();

    // Click text=Sign up for my newsletter
    await page.locator("text=Sign up for my newsletter").click();

    // Click [placeholder="Please fill this out"]
    await page.locator('[placeholder="Please fill this out"]').click();

    // Fill [placeholder="Please fill this out"]
    await page.locator('[placeholder="Please fill this out"]').fill("Early");

    // Click [placeholder="Enter your email address"]
    await page.locator('[placeholder="Enter your email address"]').click();

    // Fill [placeholder="Enter your email address"]
    await page
      .locator('[placeholder="Enter your email address"]')
      .fill("early@gmail.com");

    // Click button:has-text("Submit")
    await page.locator('button:has-text("Submit")').click();

    // Click text=The form was submitted successfully. Thank you!
    await expect(
      page.locator("text=The form was submitted successfully. Thank you!")
    ).toBeVisible();
  });
});
