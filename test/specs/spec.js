const mainPage = require('../../pageObject/MainPage');
const expect = require('chai').expect;


describe('Basic tests for Finance Analyzer', async ()=>{
  it('Check the saved shopping list', async () =>{
    await mainPage.expenseNameField.addValue("Milk");
    await mainPage.currencyField.addValue("2.50");
    await mainPage.labelField.addValue("Food");
    await mainPage.saveBtn.click();
    let result = await mainPage.resultField.getText();
    await expect(result).exist;
    });

  it('Get the overall total count', async () =>{
    await mainPage.statisticsBtn.click();
    await mainPage.monthlyTopWidget.click();
    await mainPage.numbersOnlyBtn.click();
    let count = await mainPage.getGrandTotalCount();
    await expect(count).to.contain('2.5'); 
    });
    
  it('Check the imported file ', async () =>{
    await mainPage.importExportBtn.click();
    await mainPage.radioDatabaseBtn.click();
    await mainPage.radioXLSBtn.click();
    await mainPage.textImportLocationField.addValue("Milk.xls");
    await mainPage.importBtn.click();
    let statisticsPage = await mainPage.getStatisticsPage();
    await expect(statisticsPage).to.contain('Statistics');
  });

  it('Installing and checking settings', async () =>{
    await mainPage.settingsBtn.click();
    await mainPage.firstDayOfWeekBtn.click();
    await mainPage.wednesdayBtn.click();
    await mainPage.firstDayOfMonthBtn.click();
    await mainPage.thirtyOneBtn.click();
    await mainPage.okBtn.click();
    let value = await mainPage.getDayOfMonth();
    await expect(value).to.contain('31');
  });
});