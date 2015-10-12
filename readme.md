# Frontend Template

Frontend starter code for projects using HTML, CSS, Bootstrap, and jQuery.

1. Clone this repo and give it a new name (whatever you want to name your project):

  ``` bash
  $ git clone https://github.com/sf-wdi-24/frontend-template.git your_project_name
  ```

2. After you have cloned and renamed the repo, `cd` into the directory:

  ```bash
  $ cd your_project_name
  ```

3. Next check your git remote origin:

  ```bash
  $ git remote -v
  ```

4. Your remote repo is pointing to the `frontend-template` repo, but you want it to point to your own remote repo. Remote the current remote:

  ```bash
  $ git remote remove origin
  ```

5. Next go to Github and make a new repo with the same name as the directory you just created locally. **Don't click "Initialize this repository with a README"**. Once you've created the repo on GitHub, you'll see two options. Choose the second one, "push an existing repository from the command line", and follow the instructions.

  ```bash
  $ git remote add origin your_project_name.git
  $ git push -u origin master
  ```
