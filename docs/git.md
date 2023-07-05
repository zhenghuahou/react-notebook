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


回退上个版本
```bash
git reset --hard HEAD^ 
```
