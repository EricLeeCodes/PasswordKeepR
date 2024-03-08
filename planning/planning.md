# PasswordKeepR

Eric and jakes incredible app 

Password keeper but pretty
https://matthew.wagerfield.com/parallax/
Tailwinds
Tailwind CSS - Rapidly build modern websites without ever leaving your HTML.
Tailwind CSS Cheat Sheet (tailwindcomponents.com)
STACK:
HTML 
CSS
jQuery
PostgreSQL
Expressjs
Tiny app as base skeleton
app.get('/login/:id', (req, res) => {


    // EITHER use session:
    req.session.user_id = req.params.id;


    // OR use (plain-text) cookie:
    res.cookie('user_id', req.params.id);


    // Do ONE of the above, and then send'em
    // somewhere else!
    res.redirect('/profile');
});

1. Read requirements carefully and write User Stories. 

As a user, I want to store passwords, because I am forgetful. 

As a signed-in user, I want to be able to access websites where I stored my passwords, because I want to reference the sites that I have my information to. 

2. Nouns - Database Tables

User | passwords | different sites


3. Entity Relationship Diagram (ERD)

Untitled Diagram - draw.io (diagrams.net)

4. Routes

        method   path

Index   GET      /posts
Create  GET      /posts/new        # SHOWING the form
Read    GET      /posts/:id
Update  POST     /posts/:id
Delete  POST     /posts/:id/delete
Edit    GET      /posts/:id/edit   # SHOWING the form
Save    POST     /posts            # SUBMITTING CREATE FORM

5. Wireframes


6. Set-up GitHub

EricLeeCodes/PasswordKeeperMidterm (github.com)


7. Set-up the Project Structure (Together!)
Consider naming conventions
Consider code-style 
Consider where things belong (which folders) 
Use the node-skeleton repo to get started and establish these

8. Workflow (Trello) and Comms (Discord)

Know who is on what!? Use a Kanban board on a site like Trello to 
keep track How often will you meet? Touch base daily!
Ping team members when merging main so that they know to pull the latest changes	
Tip: Kanban boards usually have at least three columns:

To-Dos (try to limit tasks to something that might take up to 3-6 hours)
In-Progress (only claim one task at a time, work until completion)
Completed (congrats! :raised_hands:)

