import * as React from "react";
import { View, StyleSheet, Button, Platform, Text } from "react-native";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";

const PDFScreen = () => {
  const [selectedPrinter, setSelectedPrinter] = React.useState();
  const [content, setContent] = React.useState("default content");
  const imgPath = "../../assets/carno-logo-black.png";
  const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body style="text-align: center;">
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      This is my test PDF, this is a state variable: ${content}
    </h1>
    <img
      src=${imgPath}
      style="width: 100vw;" />
  </body>
</html>
`;

  const print = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html,
      printerUrl: selectedPrinter?.url, // iOS only
    });
  };

  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({
      html,
    });
    console.log("File has been saved to:", uri);
    await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
  };

  const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync(); // iOS only
    setSelectedPrinter(printer);
  };

  return (
    <View style={styles.container}>
      <Button
        title="Print test PDF"
        onPress={() => {
          setContent("printing...");
          print;
        }}
      />
      <View style={styles.spacer} />
      <Button
        title="Print to PDF file"
        onPress={() => {
          setContent("printing to file...");
          printToFile;
        }}
      />
      {Platform.OS === "ios" && (
        <>
          <View style={styles.spacer} />
          <Button title="Select printer" onPress={selectPrinter} />
          <View style={styles.spacer} />
          {selectedPrinter ? (
            <Text
              style={styles.printer}
            >{`Selected printer: ${selectedPrinter.name}`}</Text>
          ) : undefined}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyleLarge: {
    fontSize: 45,
  },
  textStyleSmall: {
    fontSize: 20,
  },
});

export default PDFScreen;
