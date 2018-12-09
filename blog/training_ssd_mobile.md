

```
$ protoc object_detection/protos/*.proto --python_out=.
$ export PYTHONPATH=$PYTHONPATH:`pwd`:`pwd`/slim
$ python train.py --logtostderr --train_dir=training/ --pipeline_config_path=training/ssd_mobilenet_v1_coco.config
```

if got error:
InternalError: Dst tensor is not initialized.
```
export CUDA_VISIBLE_DEVICES=1
```
