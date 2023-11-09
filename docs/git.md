### git pull
远程跟踪分支是您的本地分支从中提取更改并将更改推送到的分支。 如果您的分支没有远程跟踪分支，该命令将失败。

因此 git pull 命令将从远程存储库中获取更改并将它们合并到签出分支的尖端。 要使命令生效，您的本地分支必须有一个远程跟踪分支。

### git pull origin master
 git pull origin master 命令将从远程 master 分支获取更改并将它们合并到您当前签出的分支


```bash
//更多请阅读：https://www.yiibai.com/git/git_pull.html
$ git pull <远程主机名> <远程分支名>:<本地分支名>

```

比如，要取回origin主机的next分支，与本地的master分支合并，需要写成下面这样 -
```bash
$ git pull origin next:master
```

如果远程分支(next)要与当前分支合并，则冒号后面的部分可以省略。上面命令可以简写为：
```bash
$ git pull origin next
```
上面命令表示，取回origin/next分支，再与当前分支合并。实质上，这等同于先做git fetch，再执行git merge。

```bash
$ git fetch origin
$ git merge origin/next
```

`回退上个版本`
```bash
git reset --hard HEAD^ 
```

`检出分支`
```bash
# 从远端origin/dev 检出本地分支local，并自动跟踪远端origin/dev分支
git checkout -b local  origin/dev 
```

`查看本地分支与远程分支关联关系`
```bash
git branch -vv
```

##### 关联远端分支
- . 没有对应的远端分支的时候
`将本地分支与远端add_order分支关联(会创建远端分支add_order)`
```bash
# 将本地分支与远程分支关联 ，远程也会新建一个分支 feature/add_order
git push --set-upstream origin feature/add_order 
```
- 已经存在了关联的远端分支，更改本地分支对应的远端分支
```bash
# 把本地分支关联的远端分支更改为`feature/add_order2`远端分支
git branch -u origin/feature/add_order2
```


`切换到上一个操作过的分支`
```bash
git checkout -
```

tips:如果新建的分支和远端的分支名字不一样，第一个push的时候，会有下面提示，按照提示
运行`git push origin HEAD:dev`即可。
`
git  push                          
fatal: The upstream branch of your current branch does not match
the name of your current branch.  To push to the upstream branch
on the remote, use
```bash
    git push origin HEAD:dev
```

To push to the branch of the same name on the remote, use
```bash
    git push origin HEAD
```
`


git stash save 'message...'可以添加一些注释

