# webpack loader demo

@babel/parser 将源代码解析成 AST
@babel/traverse 对 AST 节点进行递归遍历，生成一个便于操作、转换的 path 对象
@babel/generator 将 AST 解码生成 js 代码
@babel/types 通过该模块对具体的 AST 节点进行进行增、删、改、查
