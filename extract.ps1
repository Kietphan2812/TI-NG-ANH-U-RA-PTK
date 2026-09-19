$docxPath = ".\NoiDungDayDu.docx"
$zipPath = ".\temp_content.zip"
$destFolder = ".\extracted_doc"

Copy-Item $docxPath $zipPath
Expand-Archive -Path $zipPath -DestinationPath $destFolder -Force
Remove-Item $zipPath
Write-Output "Extracted successfully"
