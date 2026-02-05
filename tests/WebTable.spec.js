import{expect,test} from '@playwright/test'
test('WebTable Handling',async({page})=>{
    await page.goto('https://qavbox.github.io/demo/webtable/')
    const RowDatas=await page.locator('//table[@id="table02"]/tbody/tr[1]/td').allTextContents()
    // console.log(RowDatas)
    await expect(RowDatas).toEqual([
  'Tiger Nixon',
  'System Architect',
  'Edinburgh',
  '61',
  '2011/04/25',
  '$320,800'
])

const ColumnDatas=await page.locator('//table[@id="table02"]/tbody/tr/td[1]').allTextContents()
// console.log(ColumnDatas)
expect(ColumnDatas).toContain('Tiger Nixon')

const SingleData=await page.locator('//table[@id="table02"]/tbody/tr[11]/td[3]').textContent()
// console.log(SingleData)
expect(SingleData).toEqual('London')

})