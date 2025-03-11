function readFile(file, callback) {
    const reader = new FileReader();
    reader.onload = () => {
        callback(reader.result);
    };
    reader.onerror = () => {
    alert("Error reading the file. Please try again.", "error");
    };
    reader.readAsText(file);
}

export {
    readFile,
}