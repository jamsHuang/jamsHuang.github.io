'macos' 'google-cloud-sdk'

1. install google cloud SDK
Download form 
https://cloud.google.com/sdk/docs/quickstart-mac-os-x
unzip and run installation by
```
$ sh install.sh
```

2. gcloud init
run 
```
$ gcloud init
```

3. list all instances on your gcloud
```
$ gcloud compute instances list
```

4. ssh connect to your vm
```
$ gcloud compute ssh ${instanceName}
```

5. install CUDA
```
# 加入驅動鏡像站
sudo add-apt-repository ppa:graphics-drivers/ppa -y

# 升級系統
sudo apt-get update
sudo apt-get upgrade -y

# 安裝 cuda
cd ~/Downloads
sudo wget -c https://developer.nvidia.com/compute/cuda/9.0/Prod/local_installers/cuda-repo-ubuntu1604-9-0-local_9.0.176-1_amd64-deb
sudo dpkg -i cuda-repo-ubuntu1604-9-0-local_9.0.176-1_amd64-deb
sudo apt-key add /var/cuda-repo-9-0-local/7fa2af80.pub
sudo apt-get update
sudo apt-get install cuda -y

# 加入函式庫
export PATH=/usr/local/cuda-9.0/bin${PATH:+:${PATH}}
```


src:
install cuda
https://charlottehong.blogspot.com/2018/05/ubuntu-1604-cuda-90.html
https://medium.com/@kstseng/%E5%9C%A8-google-cloud-platform-%E4%B8%8A%E4%BD%BF%E7%94%A8-gpu-%E5%92%8C%E5%AE%89%E8%A3%9D%E6%B7%B1%E5%BA%A6%E5%AD%B8%E7%BF%92%E7%9B%B8%E9%97%9C%E5%A5%97%E4%BB%B6-1b118e291015
https://cloud.google.com/sdk/docs/quickstart-macos
https://ephrain.net/gcp-%E4%BD%BF%E7%94%A8-gcloud-%E9%80%A3%E7%B7%9A%E5%88%B0-google-cloud-platform-%E4%B8%8A%E7%9A%84-vm/
