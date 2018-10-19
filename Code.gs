function listFilesInFolder(folderName) {

   var sheet = SpreadsheetApp.getActiveSheet();
   sheet.appendRow(["Name", "File-Id"]);


//change the folder ID below to reflect your folder's ID (look in the URL when you're in your folder)
    var folder = DriveApp.getFolderById("1C0MTkMRQAZtheyj1r4JCSFzXVmuTsCXP");
    var contents = folder.getFiles();

    var cnt = 0;
    var file;

    while (contents.hasNext()) {
        var file = contents.next();
        cnt++;

           data = [
                file.getName(),
                file.getId(),
            ];

            sheet.appendRow(data);
    };
};
