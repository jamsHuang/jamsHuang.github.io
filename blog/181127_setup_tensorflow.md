

### install anaconda
anaconda make building the env super easy  

macOS
download from [anaconda]("https://www.anaconda.com/download/#macos")
and choise Python3 version. it's easy to install python2 version on it.

linux
```
wget https://repo.anaconda.com/archive/Anaconda3-5.3.1-Linux-x86_64.sh
bash Anaconda3-5.3.1-Linux-x86_64.sh
rm Anaconda3-5.3.1-Linux-x86_64.sh
```

### Create virtual environments for python with conda
```
echo 'export PATH="~/anaconda3/bin:$PATH"' >> ~/.bashrc   
# 更新bashrc以立即生效   
source ~/.bashrc   
# create a new env
conda create -n python36 python=3.6 anaconda   
```
activate 進入
```
source activate python36
```
deactivate 離開
```
source deactivate
```
### 安裝tensorflow
```
 # For CPU  
 conda install tensorflow  
 # For GPU  
 conda install tensorflow-gpu  
```
### 安裝相依套件  
用conda安裝基本上這些相依套件會一併安裝  
```
 # install lib
 sudo apt-get install protobuf-compiler python-pil python-lxml python-tk  
 pip install --user Cython  
 pip install --user contextlib2  
 pip install --user jupyter  
 pip install --user matplotlib  
```
安裝coco API
```
git clone https://github.com/cocodataset/cocoapi.git
cd cocoapi/PythonAPI
make
cp -r pycocotools <path_to_tensorflow>/models/research/
```

### 更改執行路徑
```
# From tensorflow/models/research/
 protoc object_detection/protos/*.proto --python_out=.   
 export PYTHONPATH=$PYTHONPATH:'pwd':'pwd'/slim 
```

### 測試安裝是否成功
```
# From tensorflow/models/research/
python object_detection/builders/model_builder_test.py
```
### training models
```
$ python train.py --logtostderr --train_dir=trained/ --pipeline_config_path=data/ssdlite_mobilenet_v2_coco.config
```

### convert model
```
python export_inference_graph.py \
    --input_type image_tensor \
    --pipeline_config_path training/ssdlite_mobilenet_v2_coco.config \
    --trained_checkpoint_prefix  training/model.ckpt-85000\
    --output_directory fine_tuned_model
```
```
tensorflowjs_converter \
    --input_format=tf_saved_model \
    --output_node_names='detection_boxes,detection_scores,num_detections,detection_classes' \
    --saved_model_tags=serve \
    fine_tuned_model/saved_model \
    web_model
```
tensorflowjs_converter \
    --input_format=tf_frozen_model \
    --output_node_names='concat,concat_1' \
    --saved_model_tags=serve \
    fine_tuned_model/frozen_inference_graph.pb \
    web_model
    
tensorflowjs_converter --input_format=tf_saved_model \
                       --output_node_names='Postprocessor/ExpandDims_1,Postprocessor/Slice' \
                       --saved_model_tags=serve \
                       fine_tuned_model/saved_model \
                       web_model  
    
 tensorflowjs_converter \
    --input_format=tf_saved_model \
    --output_node_names='concat,concat_1' \
    --saved_model_tags=serve \
    fine_tuned_model/saved_model \
    web_model
    
import tensorflow as tf
with tf.Session() as sess:
    with open('fine_tuned_model/frozen_inference_graph.pb', 'rb') as f:
        graph_def = tf.GraphDef()
        graph_def.ParseFromString(f.read()) 
        print graph_def
```
src:
https://www.jianshu.com/p/2f3be7781451  
https://tw.saowen.com/a/a7b78689d712dec00b1c7222e20893bf7f987caab08eb8aba68d4bfa4ac16e74  
https://github.com/tensorflow/models/blob/master/research/object_detection/g3doc/installation.md  
