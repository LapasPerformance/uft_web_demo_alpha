'
'Browser("myAlpha Web on AlphaFarm07").Page("myAlpha Web on AlphaFarm07").Link("Μεταφορές & Πληρωμές").Click @@ script infofile_;_ZIP::ssf1.xml_;_
'Browser("myAlpha Web on AlphaFarm07").Page("myAlpha Web on AlphaFarm07").WebElement("Παράλειψη").Click @@ script infofile_;_ZIP::ssf2.xml_;_
'
''check error message is succesfully displayed for wrong transfer
''Browser("myAlpha Web on AlphaFarm05").Page("myAlpha Web on AlphaFarm05").WebEdit("WebEdit").Click
''Browser("myAlpha Web on AlphaFarm05").Page("myAlpha Web on AlphaFarm05").WebEdit("WebEdit").Set "123456789" @@ script infofile_;_ZIP::ssf17.xml_;_
'
''Browser("myAlpha Web on AlphaFarm16").Page("myAlpha Web on AlphaFarm16").WebList("gt-transactions-search-bar").Select "Μεταφορά σε λογαριασμό εξωτερικού 123456789" @@ script infofile_;_ZIP::ssf19.xml_;_
''wait 2
''Browser("myAlpha Web on AlphaFarm05").Page("myAlpha Web on AlphaFarm05_2").WebEdit("WebEdit").Set "123456" @@ script infofile_;_ZIP::ssf18.xml_;_
'
''If Browser("myAlpha Web on AlphaFarm05").Page("myAlpha Web on AlphaFarm05_2").WebElement("Λάθος συνδυασμός BIC Code").Exist(5) = True Then
''	strFileName="c:\BIC_code.png"
''	Browser("myAlpha Web on AlphaFarm05").Page("myAlpha Web on AlphaFarm05_2").CaptureBitmap strFileName ,True
''	Reporter.ReportEvent micPass, "Error in BIC code displayed","Successfull message displayed",strFileName
''End If
''end of check
'
'Browser("myAlpha Web on AlphaFarm16").Page("myAlpha Web on AlphaFarm16_2").Link("Μεταφορές & Πληρωμές").Click @@ script infofile_;_ZIP::ssf20.xml_;_
'Browser("myAlpha Web on AlphaFarm07").Page("myAlpha Web on AlphaFarm07").WebElement("Φροντιστήριο").Click @@ script infofile_;_ZIP::ssf3.xml_;_
'
'Browser("myAlpha Web on AlphaFarm07").Page("myAlpha Web on AlphaFarm07").WebElement("Φροντιστήριο").Output CheckPoint("Φροντιστήριο") @@ script infofile_;_ZIP::ssf4.xml_;_
'Browser("myAlpha Web on AlphaFarm07").Page("myAlpha Web on AlphaFarm07").WebEdit("amount-transaction-input").Set DataTable("Amount", dtLocalSheet) @@ script infofile_;_ZIP::ssf5.xml_;_
'Browser("myAlpha Web on AlphaFarm07").Page("myAlpha Web on AlphaFarm07").WebEdit("WebEdit").Set DataTable("Reason", dtLocalSheet) @@ script infofile_;_ZIP::ssf6.xml_;_
'Browser("myAlpha Web on AlphaFarm07").Page("myAlpha Web on AlphaFarm07").WebEdit("WebEdit_2").Set "test" @@ script infofile_;_ZIP::ssf7.xml_;_
'Browser("myAlpha Web on AlphaFarm07").Page("myAlpha Web on AlphaFarm07").WebButton("Συνέχεια").Click @@ script infofile_;_ZIP::ssf8.xml_;_
'
'Browser("myAlpha Web on AlphaFarm07").Page("myAlpha Web on AlphaFarm07").WebElement("Φροντιστήριο_2").Check CheckPoint("Φροντιστήριο_check") @@ script infofile_;_ZIP::ssf9.xml_;_
'Browser("myAlpha Web on AlphaFarm07").Page("myAlpha Web on AlphaFarm07").WebElement("Επιβεβαίωση Συναλλαγής").Check CheckPoint("Επιβεβαίωση Συναλλαγής") @@ script infofile_;_ZIP::ssf10.xml_;_
'Browser("myAlpha Web on AlphaFarm07").Page("myAlpha Web on AlphaFarm07").WebButton("Συνέχεια").Click @@ script infofile_;_ZIP::ssf11.xml_;_
'
'Browser("myAlpha Web on AlphaFarm07").Page("myAlpha Web on AlphaFarm07").WebEdit("otp-input").Set "123456" @@ script infofile_;_ZIP::ssf12.xml_;_
'Browser("myAlpha Web on AlphaFarm07").Page("myAlpha Web on AlphaFarm07").WebButton("Συνέχεια").Click @@ script infofile_;_ZIP::ssf13.xml_;_
'
'Browser("myAlpha Web on AlphaFarm07").Page("myAlpha Web on AlphaFarm07").WebElement("Η συναλλαγή καταχωρήθηκε").Check CheckPoint("Η συναλλαγή καταχωρήθηκε με επιτυχία") @@ script infofile_;_ZIP::ssf14.xml_;_
'
'Browser("myAlpha Web on AlphaFarm07").Page("myAlpha Web on AlphaFarm07").WebButton("Επιστροφή").Click @@ script infofile_;_ZIP::ssf15.xml_;_
'Browser("myAlpha Web on AlphaFarm07").Page("myAlpha Web on AlphaFarm07").Link("Επισκόπηση").Click @@ script infofile_;_ZIP::ssf16.xml_;_
'Browser("myAlpha Web on AlphaFarm07").CloseAllTabs
