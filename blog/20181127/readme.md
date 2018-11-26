
echo 'export PATH="~/anaconda2/bin:$PATH"' >> ~/.bashrc
# 更新bashrc以立即生效
source ~/.bashrc

protoc object_detection/protos/*.proto --python_out=.
export PYTHONPATH=$PYTHONPATH:'pwd':'pwd'/slim

conda install pillow
conda install lxml
conda install jupyter
conda install matplotlib

src:
https://www.jianshu.com/p/2f3be7781451
https://tw.saowen.com/a/a7b78689d712dec00b1c7222e20893bf7f987caab08eb8aba68d4bfa4ac16e74
