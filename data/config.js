const config = {
    // 网站基本信息
    baseURL: "https://yangdaowan.github.io/nav/",
    // 语言
    languageCode: "zh-CN",
    // 网站标题
    title: "WebStack-Hugo 网址导航",
    // 主题
    theme: "WebStack-Hugo",
    //
    preserveTaxonomyNames: true,
    //
    disablePathToLower: true,
    //
    hasCJKLanguage: true,
    // 站点静态文件保存目录
    publishDir: "public",

    // 自定义参数
    params: {
        // 作者信息
        author: "shenweiyan",

        // 网站描述
        description: "Webstack-Hugo 网址导航 | Hugo 主题 BY Bio IT 爱好者",

        // 左侧导航栏的"网站提交"链接
        upload: "https://www.yuque.com/forms/share/1a1fee15-f7a9-4ee6-9dd4-b0ba9fef1871",

        // 左侧导航栏的"关于导航"页面链接
        about: "https://github.com/shenweiyan/Knowledge-Garden/discussions/10",

        // GitHub仓库链接
        repository: "https://github.com/shenweiyan/WebStack-Hugo",

        // 是否启用预加载动画
        enablePreLoad: true,

        // 预加载动画的文字内容
        textPreLoad: "Hugo 网址导航主题",

        // 默认是否展开左侧边导航栏
        expandSidebar: true,

        // 网站每个导航地址logo存放地址
        logosPath: "./assets/images/logos",

        // logo图片资源不存在或者错误时，默认显示的logo
        defaultLogo: "./assets/images/logos/default.webp",

        // 默认站点为深色(夜间)模式
        nightMode: false,

        // 是否默认启用一言服务
        yiyan: true,

        // 是否使用 Fancybox 实现图片灯箱/放大功能
        fancybox: true,

        // SEO相关配置
        seo: {
            // 百度统计 hm.src 的 ID
            baiduhmid: 'efccc04cb44fc49faddac5876180b369',

            // 百度HTML标签验证
            baiduSiteVer: 'codeva-cCAOSG8MBO',

            // 51.LA 网站统计ID
            tj51laid: '',

            // 51.LA 网站统计Key
            tj51lack: '',

            // Google AdSense 客户端ID
            GoogleAdsClient: ''
        },

        // 和风天气API配置
        qweather: {
            // 和风天气API密钥
            key: "085791e805a24491b43b06cf58ab31e7"
        },

        // 图片资源路径
        images: {
            // 网站favicon路径
            favicon: "./assets/images/bi-favicon.png",

            // 搜索部分浅色背景图路径
            searchImageLight: "./assets/images/bg-dna.jpg",

            // 搜索部分深色背景图路径
            searchImageDark: "./assets/images/bg-dna.jpg",

            // 展开状态下的浅色logo路径
            logoExpandLight: "./assets/images/bi-expand-dark.png",

            // 展开状态下的深色logo路径
            logoExpandDark: "./assets/images/bi-expand-light.png",

            // 折叠状态下的浅色logo路径
            logoCollapseLight: "./assets/images/bi.png",

            // 折叠状态下的深色logo路径
            logoCollapseDark: "./assets/images/bi.png"
        }
    },

    // Markdown渲染器设置
    markup: {
        goldmark: {
            renderer: {
                // 是否允许不安全的HTML渲染
                unsafe: true
            }
        }
    },

    // 底部版权信息
    footer: {
        // 版权声明和链接
        copyright: '本站内容源自互联网，如有内容侵犯了你的权益，请联系删除相关内容，联系邮箱：shen@weiyan.cc <br/>&copy; 2021 - {year} By [WebStack-Hugo](https://github.com/shenweiyan/WebStack-Hugo) | [Bio IT 爱好者](https://www.bioitee.com/) | [粤ICP备16023717号](http://beian.miit.gov.cn/)<br/>'
    }
};