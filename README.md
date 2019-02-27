# 文件上传模块
查看Demo进行如下步骤的操作:

 ## docker pull jingmalan/nodefile

  ## docker run -p 3000:8080 -d jingmalan/nodefile
  
  浏览器中运行localhost:3000

  要查看上传的文件，可以如下操作:

  docker exec it (container id) /bin/bash
  根据程序行为，上传的文件会命名为a.txt。可以通过cat 命令查看。