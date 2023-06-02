### 创建本地新分支test1
`git checkout -b test1`

###  创建远端分支test1,并和本地分支关联上了
 `git push --set-upstream origin test1`

### 基于远端dev分支创建本地分支newbranch，并切换到newbranch分支
`git checkout -b newbranch  origin/dev`
