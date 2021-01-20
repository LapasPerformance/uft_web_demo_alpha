'
'Browser("myAlpha Web on AlphaFarm07").Page("myAlpha Web on AlphaFarm07").WebList("from-select").Click @@ script infofile_;_ZIP::ssf1.xml_;_
'Browser("myAlpha Web on AlphaFarm07").Page("myAlpha Web on AlphaFarm07").WebList("from-select").Select "Η μισθοδοσία μου1.606,08€" @@ script infofile_;_ZIP::ssf2.xml_;_
'Browser("myAlpha Web on AlphaFarm07").Page("myAlpha Web on AlphaFarm07").WebList("to-select").Click @@ script infofile_;_ZIP::ssf3.xml_;_
'Browser("myAlpha Web on AlphaFarm07").Page("myAlpha Web on AlphaFarm07").WebList("to-select").Select "Η έξυπνη αποταμίευσή μου2.498,85€" @@ script infofile_;_ZIP::ssf4.xml_;_
'Browser("myAlpha Web on AlphaFarm07").Page("myAlpha Web on AlphaFarm07").WebEdit("amount-input").Set DataTable("Amount", dtLocalSheet) @@ script infofile_;_ZIP::ssf5.xml_;_
'Browser("myAlpha Web on AlphaFarm07").Page("myAlpha Web on AlphaFarm07").WebButton("Εκτέλεση").Click @@ script infofile_;_ZIP::ssf6.xml_;_
'
''check ok image is displayed
'Browser("myAlpha Web on AlphaFarm07").Page("myAlpha Web on AlphaFarm07").WebElement("WebElement").Check CheckPoint("WebElement") @@ script infofile_;_ZIP::ssf7.xml_;_
''check text is displayed
'
'Browser("myAlpha Web on AlphaFarm07").Page("myAlpha Web on AlphaFarm07").WebElement("Η συναλλαγή ολοκληρώθηκε").Check CheckPoint("Η συναλλαγή ολοκληρώθηκε με επιτυχία") @@ script infofile_;_ZIP::ssf8.xml_;_
'
'Browser("myAlpha Web on AlphaFarm07").Page("myAlpha Web on AlphaFarm07").WebElement("Amount").Check CheckPoint("check amount transfered") @@ script infofile_;_ZIP::ssf10.xml_;_
'Browser("myAlpha Web on AlphaFarm07").Page("myAlpha Web on AlphaFarm07").WebButton("Κλείσιμο").Click @@ script infofile_;_ZIP::ssf9.xml_;_
