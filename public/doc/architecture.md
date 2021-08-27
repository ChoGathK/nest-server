# 📚 整体介绍

## 基本概念

### 模块

> NestJs 中的模块 [Module](https://docs.nestjs.cn/7/modules)

除了 `Core-Module` 外，每个模块都提供对外分享的能力；一旦创建就能被任意模块复用/引用。模块是单例，因此开发者可以轻松地在多个模块之间共享同一个提供者实例。

其中，module.ts 中的模块注册表是具有 `@Module()` 装饰器的类。Nest-Server 将用它来组织逻辑结构以及管理依赖关系。`@Module()` 接受一个描述模块属性的对象，包含以下属性:

- exports	对外导出的`提供者`列表
- imports	外部导入的`模块`列表
- controllers	模块内使用的`控制器`列表
- providers	模块内使用的`提供者`列表

### 约定目录（Common）

> 每个模块中都可以有自己直属的 common 层，用于存放私有定义，`src` 下的 `common` 用于存放全局通用的定义信息，但是他们都包含:

```
* base      —— 定义基类（base class）
* constant  —— 定义常量（object/map/array）
* enum      —— 定义枚举值
* interface —— 定义接口
* type      —— 定义类型
```

### 资源目录（Shared）

> 用于存放模块中的公共资源

多用于存放 Entity/Repository 的定义，例如 sequelize model

### 控制层（Controller）

> NestJs 中的控制器 [Controller](https://docs.nestjs.cn/7/controllers)

控制层负责处理传入的请求和向客户端返回响应。通常，每个控制器有多个路由，不同的路由可以执行不同的操作。

### 业务层/提供者（Service/Provider）

> NestJs 中的提供者 [Controller](https://docs.nestjs.cn/7/providers)

Provider 只是一个用 `@Injectable()` 装饰器注释的类。
Provider 是 Nest-Server 中的基础，根据使用策略/架构分层，可以被分类为:

- Service 业务层
- Provider 基础业务/功能提供者

他们都可以通过 constructor 注入依赖关系。 这意味着对象可以彼此创建各种关系，并且“连接”对象实例的功能在很大程度上可以委托给 `Nest-Server IOC 容器`。 

### 切面层 (AOP)

- [* Middleware 中间件](https://docs.nestjs.cn/7/middlewares)
- [* Decorator 装饰器](https://docs.nestjs.cn/7/customdecorators)
- [* Filter 异常过滤器](https://docs.nestjs.cn/7/exceptionfilters)
- [* Intercetor 拦截器](https://docs.nestjs.cn/7/interceptors)
- [* Pipe 管道](https://docs.nestjs.cn/7/pipes)
- [* Guard 守卫](https://docs.nestjs.cn/7/guards)

### 数据传输对象（DTO）

> 数据传输对象（Data Transger Object - DTO）

指服务端请求过程中的数据载体

### 业务数据对象（BO）

> 业务对象（Business Object - BO）

指服务端在业务层处理逻辑后，对外输出的数据

### 架构图

![Architecture](../images/server.png)

### 目录

```
.
├── src
│   ├── common
│   │   ├── constant.ts
│   │   ├── enum.ts
│   │   ├── interface.ts
│   │   └── type.ts
│   ├── core
│   │   ├── app.ts
│   │   ├── module.ts
│   │   ├── decorator
│   │   ├── filter
│   │   ├── intercetor
│   │   └── pipe
│   ├── extends
│   │   ├── config
│   │   ├── http-client
│   │   ├── logger
│   │   ├── sequelize
│   │   ├── swagger
│   │   └── utils
│   ├── modules
│   │   └── default
│   └── main.ts
```