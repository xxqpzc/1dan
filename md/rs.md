# RS&WS记录

## 前期准备

- `language chinese` 可以设置中文
- 在纸上把需要用到vlan的写上
- `show run`后创建一个记事本在上面配置

如果是一个设备可以接入多个端口则设定一个固定端口即可

## RS基础

- 基础配置

  - 配置vlan时

    ```jsx
    vlan 2,10,20,30,66,100,101,200
    ```

  - 配置int vlan

    ```jsx
    int vlan 2
    ip add 192.168.2.1 255.255.255.0
    int vlan 10
    ip add 192.168.10.1 255.255.255.0
    ......
    ```

  - 配置端口（如果遇到DCWS则单独配置Trunk）

    ```jsx
    int e1/0/2
    sw mo acc
    sw acc vlan 2
    int e1/0/10
    sw mo acc
    sw acc vlan 10
    ......
    ```
