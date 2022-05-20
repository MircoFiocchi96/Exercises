# REBASE

Once you have finished developing and testing your feature and you consider the PR is ready to be reviewed and integrated into develop, perform the following steps (there are several ways to do it, this one is pretty straightforward):

## STEP 1: Update your local develop branch
- `git checkout develop`
- `git pull (or git pull --rebase)`


## STEP 2: Rebase the develop branch onto your feature branch
- `git rebase develop features/your-feature-branch` 

There is no need to be standing at a specific branch if you run the full command above (i.e., specifying origin and destination branches), once it has finished execution, if you run git status you will be standing at features/your-feature-branch .

## STEP 3: Execute interactive rebase
- `git rebase -i develop`

If you have configured VSCode as the default Git editor, a VSCode window will pop up. There you will have all the commits in your feature branch ordered from top to bottom (oldest to newest) as if it were a script that is about to execute. There you can provide a specific command for each commit or even change their order.

## STEP 4

Prepare squash. In order to do this, you have to put an s or squash in front of every commit except the first one:
Save and close the file.

## STEP 5

Write the message for the squashed commit, following the structure defined in the Contributing Guidelines:
Save and close the file.
STEP 6: Force push your updated branch
git push -f