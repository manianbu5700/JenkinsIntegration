import{test,expect} from '@playwright/test'
test('Frame',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Frames.html')
    const SingleFrame=await page.frameLocator('//iframe[@src="SingleFrame.html"]')
    await SingleFrame.locator('//input[@type="text"]').fill("Hello")
    await page.waitForTimeout(2000)

    const toclick=await page.locator('//a[@href="#Multiple"]')
    await toclick.click()
    const MultiFrame=await page.frameLocator('//iframe[@src="MultipleFrames.html"]')
    const InnerFrame=await MultiFrame.frameLocator('//iframe[@src="SingleFrame.html"]')
    await InnerFrame.locator('//input[@type="text"]').fill("Buddy")
    await page.waitForTimeout(2000)
    
})