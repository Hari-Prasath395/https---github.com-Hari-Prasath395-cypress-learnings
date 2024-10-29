import "cypress-file-upload";

describe("File Upload", () => {
  it("Single File Upload", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile("MEASUREMENTS.pdf");
    cy.get("#file-submit").click();
    cy.wait(5000);
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
  });

  it("File Upload - Rename", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile({
      filePath: "MEASUREMENTS.pdf",
      fileName: "MYFile.pdf",
    });
    cy.get("#file-submit").click();
    cy.wait(5000);
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
  });

  it("File Upload -Drag and Drop", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");

    cy.get("#drag-drop-upload").attachFile("MEASUREMENTS.pdf", {
      subjectType: "drag-n-drop",
    });
    cy.wait(3000);
    cy.get(
      "#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span"
    ).contains("MEASUREMENTS.pdf");
  });

  it.only("Multiple File Upload", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
    cy.get("#filesToUpload").attachFile([
      "MEASUREMENTS.pdf",
      "screw_gauge.pdf",
    ]);
    cy.wait(2000);
    cy.get(":nth-child(6) > strong").should("have.text", "Files You Selected:");
  });
});
