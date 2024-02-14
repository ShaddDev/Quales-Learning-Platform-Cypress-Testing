class CoursePage{
    elements = {
        addCourseBtn: () => cy.contains('Add Course'),
        titleInput: () => cy.get('[data-testid="Title*"]'),
        description: () => cy.get('[data-testid="Description*"]'),
        category: () => cy.get('#demo-simple-select'),    
        categoryPick: () => cy.get('[data-value="2"]'),
        offline: () => cy.contains('Offline'),
        courseAddress: () => cy.get('[data-testid="Address*"]'),
        addTheCourse: () => cy.get('.css-tzsjye > .MuiButton-root'),
        courseCreated: () => cy.contains('Course created successfully')
        
        

    }

    addcourse(){
        this.elements.addCourseBtn().click();
        this.elements.titleInput().type("Shaddai",{force:true});  
        this.elements.description().type("cohort 15 2023");
        this.elements.category().click();
        this.elements.categoryPick().click();
        this.elements.offline().click();
        this.elements.courseAddress().type("Administration");
        this.elements.addTheCourse().click();    
    }

    verifyCourseCreated(){
        this.elements.courseCreated().should("be.visible")  
    }
}

export const coursePage = new CoursePage();