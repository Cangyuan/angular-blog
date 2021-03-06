var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var blogSchema = Schema({
    author: {
        type: ObjectId,
        ref: 'user'
    },
    title: String, //标题
    content: String, //内容
    comment:String,//评论
    categorie:{type:String,default:"暂无分类"},//分类
    operate:{type:String,default:"暂无标签"},//标签
    state:String,//状态
    times:String,//阅读次数
    createTime: {type: Date, default: Date.now}//创建时间
});

module.exports = mongoose.model('blog', blogSchema);
/*
* MAC苹果系统：

 快捷键	作用
 command + d	副本当前行或选中的区块
 command + f	查找当前文档
 command + g	跳转到文档的某一行某一列
 command + p	显示参数信息
 command + r	替换当前文档
 command + w	选中当前单词、行、区块等
 command + y	删除整行
 command + mouseover	显示主要信息
 command + [	移动光标到代码块前
 command + ]	移动光标到代码块尾
 command + +	折叠区块
 command + -	展开区块
 command + ->	光标移到行尾
 command + <-	光标移到行头
 快捷键	作用
 command + option + t	将代码以某种格式包括起来
 command + option + l	将代码格式化
 快捷键	作用
 command + shift + u	切换大小写
 command + shift + [	选中到代码块前
 command + shift + ]	选中到代码块尾
 command + shift + +	折叠所有区块
 command + shift + -	展开所有区块
 快捷键	作用
 shift + return	在任意位置换行
 shift + F6	高级修改，可快速修改光标所在的标签、变量、函数等
 control + shift + f	find in path
 control + shift + j	合并行
 control + shift + r	replace in path
 快捷键	作用
 option + delete	delete to word start
 option + fn + delete	delete to word end
 option + ->	以单词为单位移动光标
 option + <-	以单词为单位移动光标





 *
*
*
*
*
* */