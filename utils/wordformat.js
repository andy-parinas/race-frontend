export function snakeCaseToTitleCase(inputString) {
    // Split the inputString into an array of words
    const words = inputString.split("_");

    // Capitalize the first letter of each word and convert the rest to lowercase
    const capitalizedWords = words.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );

    // Join the words back together with spaces
    const resultString = capitalizedWords.join(" ");
    return resultString;
}
