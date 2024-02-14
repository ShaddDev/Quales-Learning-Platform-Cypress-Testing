class DeletePage {
    elements = {
        courseCard: () => cy.get(':nth-child(2) > .MuiCardMedia-root'),
        deleteBtn: () => cy.get('.css-wvpqgg'),
        confirmDeleteBtn: () => cy.get('.MuiBox-root > .MuiButton-contained'),
        deleteSuccessful: () => cy.contains('Course deleted successfully')


    }

    deleteCourse() {
        this.elements.courseCard().click()
        this.elements.deleteBtn().click()
        this.elements.confirmDeleteBtn().click()
    }

    confirmSuccessfulDelete(){
        this.elements.deleteSuccessful
    }


}

export const deletePage = new DeletePage();