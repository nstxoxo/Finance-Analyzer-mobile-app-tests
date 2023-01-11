class MainPage {

    get saveBtn() {return $('//android.widget.Button[@text="SAVE"]');}
    get expenseNameField() {return $('//android.widget.EditText[@resource-id="com.github.vitalliuss.financeanalyzer:id/autoCompleteTextViewExpenseName"]');}
    get labelField() {return $('//android.widget.EditText[@resource-id="com.github.vitalliuss.financeanalyzer:id/autoCompleteTextViewExpenseLabel"]');}
    get currencyField() {return $('//android.widget.EditText[@resource-id="com.github.vitalliuss.financeanalyzer:id/editTextExpenseAmount"]');}
    get resultField() {return $('//android.view.ViewGroup[@resource-id="com.github.vitalliuss.financeanalyzer:id/barChartMainScreen"]');}
    get financeAnalyzerBtn() {return $('//android.widget.TextView[@text="Finance Analyzer"]')};
    
// statistics
    get statisticsBtn() {return $('//android.widget.TextView[@content-desc="Statistics"]')};
    get statisticsTitle() {return $('//android.widget.TextView[@text="Statistics"]')};
    get monthlyTopWidget() {return $('android.widget.Spinner')};
    get monthlyTopBtn() {return $('//android.widget.CheckedTextView[@index="0"]');}
    get weeklyTopBtn() {return $('//android.widget.CheckedTextView[@index="1"]');}
    get allTimeTopBtn() {return $('//android.widget.CheckedTextView[@index="2"]');}
    get numbersOnlyBtn() {return $('//android.widget.CheckedTextView[@index="3"]');}
    get grandTotalCount() {return $('//android.widget.TextView[@resource-id="com.github.vitalliuss.financeanalyzer:id/textViewGrandTotalData"]');} 

// 	import/export
    get importExportBtn() {return $('//android.widget.TextView[@content-desc="Import/Export"]')};
    get radioDatabaseBtn() {return $('//android.widget.RadioButton[@resource-id="com.github.vitalliuss.financeanalyzer:id/radioButtonDatabase"]');} 
    get radioXLSBtn() {return $('//android.widget.RadioButton[@resource-id="com.github.vitalliuss.financeanalyzer:id/radioButtonXLS"]');} 
    get textImportLocationField() {return $('//android.widget.EditText[@resource-id="com.github.vitalliuss.financeanalyzer:id/editTextImportLocation"]');}
    get importBtn() {return $('//android.widget.Button[@resource-id="com.github.vitalliuss.financeanalyzer:id/buttonImport"]')};
    get exportBtn() {return $('//android.widget.Button[@resource-id="com.github.vitalliuss.financeanalyzer:id/buttonExport"]')}; 

// 	settings
    get settingsBtn() {return $('//android.widget.TextView[@content-desc="Settings"]')};
    get firstDayOfWeekBtn() {return $('//android.widget.TextView[@text="First day of week"]')};
    get mondayBtn() {return $('//android.widget.CheckedTextView[@text="Monday"]')};
    get tuesdayBtn() {return $('//android.widget.CheckedTextView[@text="Tuesday"]')};
    get wednesdayBtn() {return $('//android.widget.CheckedTextView[@text="Wednesday"]')};
    get thursdayBtn() {return $('//android.widget.CheckedTextView[@text="Thursday"]')};
    get fridayBtn() {return $('//android.widget.CheckedTextView[@text="Friday"]')};
    get saturdayBtn() {return $('//android.widget.CheckedTextView[@text="Saturday"]')};
    get sundayBtn() {return $('//android.widget.CheckedTextView[@text="Sunday"]')};
    get cancelBtn() {return $('//android.widget.Button[@resource-id="android:id/button2"]')};
    get firstDayOfMonthBtn() {return $('//android.widget.TextView[@text="First day of month"]')};
    get oneBtn() {return $('//android.widget.Button[@text="1"]')};
    get thirtyOneTitle() {return $('//android.widget.TextView[@text="31"]')}; 
    get thirtyOneBtn() {return $('//android.widget.Button[@text="31"]')};
    get cancelBtn() {return $('//android.widget.Button[@text="Cancel"]')};
    get okBtn() {return $('//android.widget.Button[@text="OK"]')};
    get coinSupportBtn() {return $('//android.widget.TextView[@text="Coin support"]')}; 

//  help 
    get helpBtn() {return $('//android.widget.TextView[@content-desc="Help"]')};
    get openWithTitle() {return $('android.widget.RelativeLayout')};
    get chromeBtn() {return $('//android.widget.TextView[@text="Chrome"]')};


    getGrandTotalCount() {
      let count = this.grandTotalCount.getText();
      return count;
    }
  
    getStatisticsPage() {
      let title = this.statisticsTitle.getText();
      return title;
    }

    getDayOfMonth() {
      let day = this.thirtyOneTitle.getText();
      return day;
    }
  }

  module.exports = new MainPage();