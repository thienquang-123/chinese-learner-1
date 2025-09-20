// --- VOCABULARY LIST ---
const vocab = [
    /*
    { chinese: "万", pinyin: "wàn", english: ["ten thousands"], vietnamese: ["mười nghìn", "vạn"] },
    { chinese: "万万", pinyin: "wàn wàn", english: ["absolutely"], vietnamese: ["nhất định", "tuyệt đối"] },
    { chinese: "万一", pinyin: "wàn yī", english: ["just in case"], vietnamese: ["phòng khi/lỡ như", "phòng khi", "lỡ như", "vạn nhất"] },
    { chinese: "万分", pinyin: "wàn fēn", english: ["absolutely", "extremely"], vietnamese: ["vô cùng/cực kỳ", "vô cùng", "cực kỳ", "vạn phần"] },
    { chinese: "之", pinyin: "zhī", english: ["of"], vietnamese: ["của"] },
    { chinese: "之前", pinyin: "zhī qián", english: ["before"], vietnamese: ["trước đây", "trước khi", "trước"] },
    { chinese: "之后", pinyin: "zhī hòu", english: ["after"], vietnamese: ["sau đó", "sau khi", "sau"] },
    { chinese: "无话可说", pinyin: "wú huà kě shuō", english: ["have nothing to say"], vietnamese: ["không có gì để nói"] },
    { chinese: "山", pinyin: "shān", english: ["mountain"], vietnamese: ["núi", "sơn"] },
    { chinese: "火山", pinyin: "huǒ shān", english: ["volcano"], vietnamese: ["núi lửa"] },
    { chinese: "山地", pinyin: "shān dì", english: ["mountain terrain"], vietnamese: ["vùng núi", "miền núi", "sơn địa"] },
    { chinese: "山水", pinyin: "shān shuǐ", english: ["landscape"], vietnamese: ["phong cảnh", "sơn thủy"] },
    { chinese: "从头", pinyin: "cóng tóu", english: ["from the beginning"], vietnamese: ["từ đầu"] },
    { chinese: "前头", pinyin: "qián tou", english: ["in front"], vietnamese: ["phía trước", "đằng trước"] },
    { chinese: "后头", pinyin: "hòu tou", english: ["behind"], vietnamese: ["phía sau", "đằng sau"] },
    { chinese: "外头", pinyin: "wài tou", english: ["outside"], vietnamese: ["bên ngoài"] },
    */
    { chinese: "历", pinyin: "lì", english: ["experience"], vietnamese: ["lịch"] },
    { chinese: "学历", pinyin: "xué lì", english: ["educational background"], vietnamese: ["trình độ học vấn", "học vấn"] },
    { chinese: "来历", pinyin: "lái lì", english: ["background"], vietnamese: ["lai lịch"] },
    { chinese: "日历", pinyin: "rì lì", english: ["calendar"], vietnamese: ["lịch", "cuốn lịch"] },
    { chinese: "大方", pinyin: "dà fang", english: ["generous"], vietnamese: ["hào phóng", "rộng rãi"] },
    { chinese: "千", pinyin: "qiān", english: ["a thousand"], vietnamese: ["nghìn", "ngàn", "thiên"] },
    { chinese: "千万", pinyin: "qiān wàn", english: ["absolutely"], vietnamese: ["nhất định", "tuyệt đối"] },
    { chinese: "记得", pinyin: "jì de", english: ["remember"], vietnamese: ["nhớ lại"] },
    { chinese: "记住", pinyin: "jì zhù", english: ["remember"], vietnamese: ["ghi nhớ"] },
    { chinese: "于", pinyin: "yú", english: ["about", "therefore"], vietnamese: ["do đó", "vu"] },
    { chinese: "于是", pinyin: "yú shì", english: ["therefore"], vietnamese: ["thế là", "vì vậy", "cho nên", "do đó"] },
    { chinese: "关于", pinyin: "guān yú", english: ["about"], vietnamese: ["đối với", "liên quan đến", "về"] },
    { chinese: "对于", pinyin: "duì yú", english: ["about"], vietnamese: ["đối với", "liên quan đến", "về"] },
    { chinese: "等于", pinyin: "děng yú", english: ["equals"], vietnamese: ["bằng"] },
    { chinese: "乎", pinyin: "hū", english: ["almost"], vietnamese: ["gần như", "hồ"] },
    { chinese: "几乎", pinyin: "jī hū", english: ["almost"], vietnamese: ["hầu như", "gần như"] },
    { chinese: "在乎", pinyin: "zài hu", english: ["care about"], vietnamese: ["quan tâm", "để tâm", "để ý"] },
    { chinese: "卡", pinyin: "kǎ / qiā", english: ["card", "get stuck"], vietnamese: ["thẻ", "kẹt", "mắc kẹt"] },
    { chinese: "卡车", pinyin: "kǎ chē", english: ["truck"], vietnamese: ["xe tải"] },
    { chinese: "片", pinyin: "piàn", english: ["slice", "sheet"], vietnamese: ["miếng/lát/tấm", "phiến"] },
    { chinese: "卡片", pinyin: "kǎ piàn", english: ["card"], vietnamese: ["tấm thẻ", "thiệp", "thẻ"] },
    { chinese: "名片", pinyin: "míng piàn", english: ["business card"], vietnamese: ["danh thiếp"] },
    { chinese: "止", pinyin: "zhǐ", english: ["stop", "end"], vietnamese: ["dừng lại", "kết thúc", "chỉ"] },
    { chinese: "不止", pinyin: "bù zhǐ", english: ["not only", "more than"], vietnamese: ["không chỉ", "hơn"] },
    { chinese: "到...为止", pinyin: "dào... wéi zhǐ", english: ["until"], vietnamese: ["cho đến khi", "cho đến"] },
    { chinese: "无", pinyin: "wú", english: ["nothing", "none"], vietnamese: ["không", "vô"] },
    { chinese: "无能为力", pinyin: "wú néng wéi lì", english: ["powerless"], vietnamese: ["bất lực", "không có năng lực"] },
    { chinese: "无法无天", pinyin: "wú fǎ wú tiān", english: ["lawless"], vietnamese: ["vô pháp vô thiên"] },
    { chinese: "未", pinyin: "wèi", english: ["have not", "not yet"], vietnamese: ["chưa", "vị"] },
    { chinese: "未来", pinyin: "wèi lái", english: ["the future", "future"], vietnamese: ["tương lai"] },
    { chinese: "从未", pinyin: "cóng wèi", english: ["have never"], vietnamese: ["chưa bao giờ"] },
    { chinese: "支", pinyin: "zhī", english: ["to pay"], vietnamese: ["chi trả", "trả", "chi"] },
    { chinese: "支票", pinyin: "zhī piào", english: ["cheque"], vietnamese: ["séc", "chi phiếu"] },
    { chinese: "开支", pinyin: "kāi zhī", english: ["expenditures"], vietnamese: ["chi phí", "khoản chi"] },
    { chinese: "支出", pinyin: "zhī chū", english: ["to pay", "expenditures"], vietnamese: ["chi ra", "chi tiêu"] },
    { chinese: "父", pinyin: "fù", english: ["father"], vietnamese: ["cha", "bố", "phụ"] },
    { chinese: "父亲", pinyin: "fù qīn", english: ["father"], vietnamese: ["cha", "bố", "phụ thân"] },
    { chinese: "交", pinyin: "jiāo", english: ["to interact", "to submit", "to exchange"], vietnamese: ["giao"] },
    { chinese: "外交", pinyin: "wài jiāo", english: ["foreign affairs"], vietnamese: ["ngoại giao"] },
    { chinese: "交给", pinyin: "jiāo gěi", english: ["give to", "submit to"], vietnamese: ["giao cho", "giao gửi"] },
    { chinese: "上交", pinyin: "shàng jiāo", english: ["to submit"], vietnamese: ["nộp lên", "giao nộp", "nộp"] },
    { chinese: "摸", pinyin: "mō", english: ["to touch"], vietnamese: ["sờ", "chạm", "xoa", "mạc"] },
    { chinese: "闻", pinyin: "wén", english: ["to smell"], vietnamese: ["ngửi"] },
    { chinese: "卖", pinyin: "mài", english: ["to sell"], vietnamese: ["mua", "mại"] },
    { chinese: "爷", pinyin: "yé", english: ["old man", "grandfather"], vietnamese: ["ông", "gia"] },
    { chinese: "爷爷", pinyin: "yé ye", english: ["grandfather"], vietnamese: ["ông nội", "gia gia"] },
    { chinese: "大爷", pinyin: "dà ye", english: ["uncle"], vietnamese: ["bác"] },
    { chinese: "共", pinyin: "gòng", english: ["public", "together"], vietnamese: ["cùng/chung", "cộng"] },
    { chinese: "共同", pinyin: "gòng tóng", english: ["together"], vietnamese: ["cùng nhau", "chung", "cộng đồng"] },
    { chinese: "一共", pinyin: "yī gòng", english: ["all together", "in total"], vietnamese: ["tổng cộng"] },
    { chinese: "世", pinyin: "shì", english: ["the world"], vietnamese: ["đời", "thế"] },
    { chinese: "去世", pinyin: "qù shì", english: ["to pass away"], vietnamese: ["qua đời", "tạ thế"] },
    { chinese: "问世", pinyin: "wèn shì", english: ["to come out", "to debut"], vietnamese: ["ra mắt", "ra đời"] },
    { chinese: "世界", pinyin: "shì jiè", english: ["the world"], vietnamese: ["thế giới"] },
    { chinese: "修", pinyin: "xiū", english: ["to fix", "to repair"], vietnamese: ["sửa", "sửa chữa", "tu"] },
    { chinese: "准备", pinyin: "zhǔn bèi", english: ["to prepare"], vietnamese: ["chuẩn bị"] },
    { chinese: "饱", pinyin: "bǎo", english: ["full", "satisfied"], vietnamese: ["no", "bão"] },
    { chinese: "准", pinyin: "zhǔn", english: ["to allow", "to permit", "standard"], vietnamese: ["chuẩn"] },
    { chinese: "备", pinyin: "bèi", english: ["preparation", "equipment"], vietnamese: ["sự chuẩn bị/thiết bị", "bị"] },
    { chinese: "功", pinyin: "gōng", english: ["achievement", "result"], vietnamese: ["công"] },
    { chinese: "课", pinyin: "kè", english: ["class", "lesson"], vietnamese: ["khoá"] },
    { chinese: "功课", pinyin: "gōng kè", english: ["homework"], vietnamese: ["bài tập"] },
    { chinese: "头发", pinyin: "tóu fa", english: ["hair"], vietnamese: ["tóc"] },
    { chinese: "头脑", pinyin: "tóu nǎo", english: ["mind"], vietnamese: ["đầu óc", "trí não"] },
    { chinese: "成", pinyin: "chéng", english: ["to become", "to finish", "to complete", "to accomplish"], vietnamese: ["thành"] },
    { chinese: "成果", pinyin: "chéng guǒ", english: ["achievement"], vietnamese: ["thành quả", "thành tựu"] },
    { chinese: "成语", pinyin: "chéng yǔ", english: ["idiom"], vietnamese: ["thành ngữ"] },
    { chinese: "完成", pinyin: "wán chéng", english: ["to finish"], vietnamese: ["hoàn thành"] },
    { chinese: "未成年", pinyin: "wèi chéng nián", english: ["minors"], vietnamese: ["vị thành niên"] },
    { chinese: "成全", pinyin: "chéng quán", english: ["to achieve"], vietnamese: ["thành toàn", "giúp cho đạt được"] },
    { chinese: "京成", pinyin: "jīng chéng", english: ["capital"], vietnamese: ["kinh thành"] },
    { chinese: "切", pinyin: "qiē", english: ["to cut", "to slice"], vietnamese: ["cắt", "thái", "thiết"] },
    { chinese: "亲切", pinyin: "qīn qiè", english: ["familiar", "intimate"], vietnamese: ["thân mật", "thân thiết"] },
    { chinese: "切要", pinyin: "qiè yào", english: ["essential"], vietnamese: ["thiết yếu", "cốt yếu"] },
    { chinese: "猜", pinyin: "cāi", english: ["guess"], vietnamese: ["đoán", "sai"] },
    { chinese: "借", pinyin: "jiè", english: ["to borrow"], vietnamese: ["mượn", "vay", "tá"] },
    { chinese: "活", pinyin: "huó", english: ["to live"], vietnamese: ["sống", "hoạt"] },
    { chinese: "碰", pinyin: "pèng", english: ["to bump", "to meet", "to touch"], vietnamese: ["va", "đụng", "gặp", "chạm"] },
    { chinese: "变", pinyin: "biàn", english: ["to change", "to become"], vietnamese: ["biến"] },
    { chinese: "不变", pinyin: "bù biàn", english: ["constant", "unchanging"], vietnamese: ["bất biến", "không đổi"] },
    { chinese: "变动", pinyin: "biàn dòng", english: ["variation", "fluctuation", "change"], vietnamese: ["biến động", "thay đổi"] },
    { chinese: "翻", pinyin: "fān", english: ["to turn over", "to translate"], vietnamese: ["lật", "phiên"] },
    { chinese: "译", pinyin: "yì", english: ["to translate"], vietnamese: ["dịch"] },
    { chinese: "翻译", pinyin: "fān yì", english: ["translation", "to translate"], vietnamese: ["phiên dịch"] },
    { chinese: "像", pinyin: "xiàng", english: ["to look like", "as if"], vietnamese: ["giống như", "tựa như", "tượng"] },
    { chinese: "想像", pinyin: "xiǎng xiàng", english: ["to imagine"], vietnamese: ["tưởng tượng"] },
    { chinese: "写", pinyin: "xiě", english: ["to write"], vietnamese: ["viết", "tả"] },
    { chinese: "停", pinyin: "tíng", english: ["to stop"], vietnamese: ["dừng", "ngừng", "đình"] },
    { chinese: "停工", pinyin: "tíng gōng", english: ["strike"], vietnamese: ["đình công"] },
    { chinese: "停止", pinyin: "tíng zhǐ", english: ["to stop", "to suspend", "to cease"], vietnamese: ["đình chỉ", "ngừng lại"] },
    { chinese: "夫", pinyin: "fū", english: ["husband", "man"], vietnamese: ["chồng", "phu"] },
    { chinese: "工夫", pinyin: "gōng fu", english: ["time", "effort"], vietnamese: ["thời gian", "công sức", "công phy"] },
    { chinese: "大夫", pinyin: "dài fu", english: ["doctor"], vietnamese: ["bác sĩ", "đại phu"] },
    { chinese: "夫人", pinyin: "fū rén", english: ["lady", "wife", "Mrs."], vietnamese: ["phu nhân", "bà"] },
    { chinese: "失", pinyin: "shī", english: ["to lose"], vietnamese: ["mất", "sai", "thất"] },
    { chinese: "失去", pinyin: "shī qù", english: ["to lose"], vietnamese: ["mất đi", "đánh mất"] },
    { chinese: "失事", pinyin: "shī shì", english: ["to have an accident"], vietnamese: ["gặp nạn", "xảy ra tai nạn"] },
    { chinese: "过失", pinyin: "guò shī", english: ["fault", "error"], vietnamese: ["lỗi lầm", "sai sót"] },
    { chinese: "实", pinyin: "shí", english: ["real", "fact", "true"], vietnamese: ["thực", "thật"] },
    { chinese: "现实", pinyin: "xiàn shí", english: ["reality"], vietnamese: ["hiện thực", "thực tế"] },
    { chinese: "真实", pinyin: "zhēn shí", english: ["real", "true", "authentic"], vietnamese: ["chân thực", "chân thật"] },
    { chinese: "实习", pinyin: "shí xí", english: ["internship", "to intern"], vietnamese: ["thực tập"] },
    { chinese: "事实", pinyin: "shì shí", english: ["fact", "truth"], vietnamese: ["sự thật"] },
    { chinese: "买卖", pinyin: "mǎi mai", english: ["business", "trade"], vietnamese: ["kinh doanh", "việc mua bán", "mua bán"] },
    { chinese: "外卖", pinyin: "wài mài", english: ["takeout", "food delivery"], vietnamese: ["đồ ăn mang về"] },
    { chinese: "读", pinyin: "dú", english: ["to read"], vietnamese: ["đọc", "độc"] },
    { chinese: "读者", pinyin: "dú zhě", english: ["reader"], vietnamese: ["độc giả", "người đọc"] },
    { chinese: "式", pinyin: "shì", english: ["method", "type", "style"], vietnamese: ["kiểu", "loại", "thức"] },
    { chinese: "方式", pinyin: "fāng shì", english: ["method", "way"], vietnamese: ["phương thức", "cách thức"] },
    { chinese: "样式", pinyin: "yàng shì", english: ["style", "type", "pattern"], vietnamese: ["kiểu dáng", "phong cách"] },
    { chinese: "新式", pinyin: "xīn shì", english: ["new style", "latest type"], vietnamese: ["kiểu mới"] },
    { chinese: "试", pinyin: "shì", english: ["to try", "to test"], vietnamese: ["thử", "thí"] },
    { chinese: "面试", pinyin: "miàn shì", english: ["interview"], vietnamese: ["phỏng vấn"] },
    { chinese: "许", pinyin: "xǔ", english: ["to allow", "to permit", "to promise"], vietnamese: ["cho phép", "hứa"] },
    { chinese: "也许", pinyin: "yě xǔ", english: ["perhaps", "maybe"], vietnamese: ["có lẽ", "biết đâu"] },
    { chinese: "许多", pinyin: "xǔ duō", english: ["many", "a lot of"], vietnamese: ["nhiều", "rất nhiều"] },
    { chinese: "不许", pinyin: "bù xǔ", english: ["not allowed", "forbidden"], vietnamese: ["không được phép", "cấm"] },
    { chinese: "主要", pinyin: "zhǔ yào", english: ["main", "mainly", "primary"], vietnamese: ["chủ yếu", "chính"] },
    { chinese: "主动", pinyin: "zhǔ dòng", english: ["proactive", "to take the initiative"], vietnamese: ["chủ động"] },
    { chinese: "主人", pinyin: "zhǔ rén", english: ["master", "host", "owner"], vietnamese: ["chủ nhân", "chủ nhà"] },
    { chinese: "注", pinyin: "zhù", english: ["to pay attention"], vietnamese: ["chú"] },
    { chinese: "注意", pinyin: "zhù yì", english: ["to pay attention", "to be careful"], vietnamese: ["chú ý", "để ý", "cẩn thận"] },
    { chinese: "关注", pin_yin: "guān zhù", english: ["to follow", "to pay close attention to"], vietnamese: ["quan tâm", "theo dõi"] },
    { chinese: "往", pinyin: "wǎng", english: ["toward", "to"], vietnamese: ["hướng về", "đến", "vãng"] },
    { chinese: "往常", pinyin: "wǎng cháng", english: ["usually", "as before"], vietnamese: ["thường ngày", "như thường lệ", "như thường"] },
    { chinese: "来往", pinyin: "lái wǎng", english: ["to interact with", "dealings"], vietnamese: ["qua lại", "giao du", "lai vãng"] },
    { chinese: "往前", pinyin: "wǎng qián", english: ["forward"], vietnamese: ["về phía trước"] },
    { chinese: "与", pinyin: "yǔ", english: ["and", "with"], vietnamese: ["và", "với"] },
    { chinese: "写作", pinyin: "xiě zuò", english: ["writing"], vietnamese: ["viết"] },
    { chinese: "考", pinyin: "kǎo", english: ["to test", "to examine"], vietnamese: ["thi", "kiểm tra", "khảo"] },
    { chinese: "思考", pinyin: "sī kǎo", english: ["to think", "to ponder"], vietnamese: ["suy nghĩ", "nghĩ ngợi"] },
    { chinese: "考试", pinyin: "kǎo shì", english: ["exam", "test"], vietnamese: ["kỳ thi", "bài thi", "khảo thí"] },
    { chinese: "高考", pinyin: "gāo kǎo", english: ["Gaokao", "college entrance exam"], vietnamese: ["Cao Khảo"] },
    { chinese: "风", pinyin: "fēng", english: ["wind"], vietnamese: ["gió", "phong"] },
    { chinese: "风水", pinyin: "fēng shuǐ", english: ["fengshui"], vietnamese: ["phong thủy"] },
    { chinese: "内", pinyin: "nèi", english: ["inside", "inner"], vietnamese: ["bên trong", "nội"] },
    { chinese: "之内", pinyin: "zhī nèi", english: ["within"], vietnamese: ["trong vòng", "bên trong"] },
    { chinese: "内行", pinyin: "nèi háng", english: ["expert", "insider"], vietnamese: ["người am hiểu", "chuyên gia"] },
    { chinese: "内在美", pinyin: "nèi zài měi", english: ["inner beauty"], vietnamese: ["vẻ đẹp nội tâm"] },
    { chinese: "向", pinyin: "xiàng", english: ["toward"], vietnamese: ["hướng"] },
    { chinese: "方向", pinyin: "fāng xiàng", english: ["direction"], vietnamese: ["phương hướng", "hướng"] },
    { chinese: "已", pinyin: "yǐ", english: ["already"], vietnamese: ["đã", "dĩ", "rồi"] },
    { chinese: "色", pinyin: "sè", english: ["color"], vietnamese: ["sắc"] },
    { chinese: "出色", pinyin: "chū sè", english: ["outstanding", "excellent"], vietnamese: ["xuất sắc", "nổi bật"] },
    { chinese: "正", pinyin: "zhèng", english: [""], vietnamese: ["chính", "chánh"] },
    { chinese: "正好", pinyin: "zhèng hǎo", english: ["just right", "just enough"], vietnamese: ["vừa hay", "vừa đúng lúc"] },
    { chinese: "正式", pinyin: "zhèng shì", english: ["formal", "official"], vietnamese: ["chính thức", "trang trọng"] },
    { chinese: "正常", pinyin: "zhèng cháng", english: ["normal", "regular"], vietnamese: ["bình thường"] },
    { chinese: "步", pinyin: "bù", english: ["step", "walk"], vietnamese: ["bộ"] },
    { chinese: "步行", pinyin: "bù xíng", english: ["to walk", "on foot"], vietnamese: ["đi bộ", "bộ hành"] },
    { chinese: "进步", pinyin: "jìn bù", english: ["to advance", "to progress"], vietnamese: ["tiến bộ"] },
    { chinese: "地步", pinyin: "dì bù", english: ["extent", "stage", "plight"], vietnamese: ["mức độ", "tình trạng", "tình hình", "tình cảnh"] },
    { chinese: "此", pinyin: "cǐ", english: ["this", "these"], vietnamese: ["này", "đây", "thử"] },
    { chinese: "因此", pinyin: "yīn cǐ", english: ["therefore", "for this reason"], vietnamese: ["do đó", "vì vậy"] },
    { chinese: "从此", pinyin: "cóng cǐ", english: ["since then", "from now on"], vietnamese: ["từ đó", "từ nay về sau"] },
    { chinese: "此外", pinyin: "cǐ wài", english: ["besides", "in addition"], vietnamese: ["ngoài ra"] },
    { chinese: "奇", pinyin: "qí", english: ["odd", "strange", "rare"], vietnamese: ["kỳ", "kì"] },
    { chinese: "好奇", pinyin: "hào qí", english: ["curious"], vietnamese: ["tò mò", "hiếu kỳ"] },
    { chinese: "何", pinyin: "hé", english: ["what", "which", "how"], vietnamese: ["hà"] },
    { chinese: "如何", pinyin: "rú hé", english: ["how"], vietnamese: ["làm thế nào", "làm sao"] },
    { chinese: "为何", pinyin: "wèi hé", english: ["why"], vietnamese: ["tại sao", "vì sao"] },
    { chinese: "河", pinyin: "hé", english: ["river"], vietnamese: ["sông", "hà"] },
    { chinese: "河水", pinyin: "hé shuǐ", english: ["river water"], vietnamese: ["nước sông"] },
    { chinese: "告", pinyin: "gào", english: ["to say", "to tell"], vietnamese: ["nói", "bảo", "cáo"] },
    { chinese: "告别", pinyin: "gào bié", english: ["to say goodbye"], vietnamese: ["tạm biệt", "cáo biệt"] },
    { chinese: "员", pinyin: "yuán", english: ["member", "employee"], vietnamese: ["viên"] },
    { chinese: "店员", pinyin: "diàn yuán", english: ["shop clerk"], vietnamese: ["nhân viên cửa hàng", "nhân viên phục cụ"] },
    { chinese: "员工", pinyin: "yuán gōng", english: ["employee", "staff"], vietnamese: ["nhân viên"] },
    { chinese: "运动员", pinyin: "yùn dòng yuán", english: ["athlete"], vietnamese: ["vận động viên"] },
    { chinese: "会员", pinyin: "huì yuán", english: ["member"], vietnamese: ["hội viên"] },
    { chinese: "台", pinyin: "tái", english: ["platform", "station", "stage"], vietnamese: ["đài", "thai"] },
    { chinese: "电台", pinyin: "diàn tái", english: ["radio station"], vietnamese: ["đài phát thanh"] },
    { chinese: "电视台", pinyin: "diàn shì tái", english: ["TV station"], vietnamese: ["đài truyền hình"] },
    { chinese: "台风", pinyin: "tái fēng", english: ["typhoon"], vietnamese: ["bão"] },
    { chinese: "各", pinyin: "gè", english: ["each", "every", "various"], vietnamese: ["mỗi", "các"] },
    { chinese: "各自", pinyin: "gè zì", english: ["respective", "each one"], vietnamese: ["từng người", "mỗi người"] },
    { chinese: "各式各样", pinyin: "gè shì gè yàng", english: ["all kinds of", "a variety of"], vietnamese: ["đủ loại", "muôn hình vạn trạng"] },
    { chinese: "客", pinyin: "kè", english: ["guest", "customer"], vietnamese: ["khách"] },
    { chinese: "旅客", pinyin: "lǚ kè", english: ["traveler", "passenger"], vietnamese: ["lữ khách", "hành khách"] },
    { chinese: "请客", pinyin: "qǐng kè", english: ["to host", "to treat someone"], vietnamese: ["mời khách", "đãi khách", "thỉnh khách"] },
    { chinese: "做客", pinyin: "zuò kè", english: ["to be a guest"], vietnamese: ["làm khách"] },
    { chinese: "客气", pinyin: "kè qi", english: ["polite", "courteous"], vietnamese: ["khách sáo", "lịch sự"] },
    { chinese: "路", pinyin: "lù", english: ["road", "path"], vietnamese: ["đường", "lộ"] },
    { chinese: "路人", pinyin: "lù rén", english: ["passerby"], vietnamese: ["người qua đường"] },
    { chinese: "及", pinyin: "jí", english: ["and", "to reach"], vietnamese: ["cập", "cùng", "kịp"] },
    { chinese: "以及", pinyin: "yǐ jí", english: ["as well as"], vietnamese: ["cũng như", "và"] },
    { chinese: "及时", pinyin: "jí shí", english: ["in time", "timely"], vietnamese: ["kịp thời", "đúng lúc"] },
    { chinese: "极", pinyin: "jí", english: ["extremely", "pole"], vietnamese: ["cực"] },
    { chinese: "北极", pinyin: "běi jí", english: ["North Pole"], vietnamese: ["Bắc Cực"] },
    { chinese: "级", pinyin: "jí", english: ["level", "grade"], vietnamese: ["cấp"] },
    { chinese: "级别", pinyin: "jí bié", english: ["level", "rank"], vietnamese: ["cấp bậc", "thứ hạng"] },
    { chinese: "广", pinyin: "guǎng", english: ["wide", "vast", "broad"], vietnamese: ["rộng", "rộng lớn", "quảng"] },
    { chinese: "广告", pinyin: "guǎng gào", english: ["advertisement"], vietnamese: ["quảng cáo"] },
    { chinese: "广场", pinyin: "guǎng chǎng", english: ["public square"], vietnamese: ["quảng trường"] },
    { chinese: "广大", pinyin: "guǎng dà", english: ["vast", "extensive"], vietnamese: ["rộng lớn", "bao la", "quảng bá"] },
    { chinese: "床", pinyin: "chuáng", english: ["bed"], vietnamese: ["giường"] },
    { chinese: "起床", pinyin: "qǐ chuáng", english: ["to get up"], vietnamese: ["thức dậy"] },
    { chinese: "度", pinyin: "dù", english: ["degree", "measure"], vietnamese: ["độ", "mức độ"] },
    { chinese: "难度", pinyin: "nán dù", english: ["degree of difficulty"], vietnamese: ["độ khó"] },
    { chinese: "长度", pinyin: "cháng dù", english: ["length"], vietnamese: ["chiều dài", "độ dài"] },
    { chinese: "高度", pinyin: "gāo dù", english: ["height", "altitude"], vietnamese: ["chiều cao", "độ cao"] },
    { chinese: "底", pinyin: "dǐ", english: ["bottom", "end"], vietnamese: ["đáy", "cuối"] },
    { chinese: "到底", pinyin: "dào dǐ", english: ["after all", "in the end"], vietnamese: ["rốt cuộc", "cuối cùng"] },
    { chinese: "年底", pinyin: "nián dǐ", english: ["end of the year"], vietnamese: ["cuối năm"] },
    { chinese: "底下", pinyin: "dǐ xia", english: ["under", "below"], vietnamese: ["phía dưới", "bên dưới"] },
    { chinese: "且", pinyin: "qiě", english: ["and", "also"], vietnamese: ["và", "hơn nữa"] },
    { chinese: "而且", pinyin: "ér qiě", english: ["in addition", "moreover"], vietnamese: ["hơn nữa", "mà còn", "ngoài ra"] },
    { chinese: "直", pinyin: "zhí", english: ["straight", "direct"], vietnamese: ["thẳng", "trực"] },
    { chinese: "直到", pinyin: "zhí dào", english: ["until"], vietnamese: ["cho đến khi"] },
    { chinese: "其", pinyin: "qí", english: ["his", "her", "its", "their"], vietnamese: ["của anh ấy/cô ấy/nó/họ", "nó"] },
    { chinese: "其实", pinyin: "qí shí", english: ["actually", "in fact"], vietnamese: ["thực ra", "thật ra"] },
    { chinese: "其它", pinyin: "qí tā", english: ["other", "the rest"], vietnamese: ["cái khác"] },
    { chinese: "其他", pinyin: "qí tā", english: ["other people"], vietnamese: ["người khác"] },
    { chinese: "姐", pinyin: "jiě", english: ["older sister"], vietnamese: ["chị", "tỷ", "tỉ"] },
    { chinese: "姐姐", pinyin: "jiě jie", english: ["older sister"], vietnamese: ["chị gái"] },
    { chinese: "租", pinyin: "zū", english: ["to rent"], vietnamese: ["thuê", "tô"] },
    { chinese: "出租车", pinyin: "chū zū chē", english: ["taxi"], vietnamese: ["taxi"] },
    { chinese: "房租", pinyin: "fáng zū", english: ["rent (for a house/apartment)"], vietnamese: ["tiền thuê nhà"] },
    { chinese: "季", pinyin: "jì", english: ["season", "quarter (of a year)"], vietnamese: ["mùa", "quý"] },
    { chinese: "四季", pinyin: "sì jì", english: ["four seasons"], vietnamese: ["bốn mùa"] },
    { chinese: "季度", pinyin: "jì dù", english: ["quarter (of a year)"], vietnamese: ["quý"] },
    { chinese: "奶", pinyin: "nǎi", english: ["milk", "grandmother"], vietnamese: ["sữa", "bà nội"] },
    { chinese: "奶奶", pinyin: "nǎi nai", english: ["grandmother (father's side)"], vietnamese: ["bà nội"] },
    { chinese: "牛奶", pinyin: "niú nǎi", english: ["milk (cow's)"], vietnamese: ["sữa bò", "sữa"] },
    { chinese: "妹", pinyin: "mèi", english: ["younger sister"], vietnamese: ["em gái", "muội"] },
    { chinese: "妹妹", pinyin: "mèi mei", english: ["younger sister"], vietnamese: ["em gái"] },
    { chinese: "姐妹", pinyin: "jiě mèi", english: ["sisters"], vietnamese: ["chị em", "tỷ muội", "tỉ muội"] },
    { chinese: "妻", pinyin: "qī", english: ["wife"], vietnamese: ["vợ", "thê"] },
    { chinese: "妻子", pinyin: "qī zi", english: ["wife"], vietnamese: ["vợ", "thê tử"] },
    { chinese: "夫妻", pinyin: "fū qī", english: ["husband and wife", "couple"], vietnamese: ["vợ chồng", "phu thê"] },
    { chinese: "婚", pinyin: "hūn", english: ["marriage"], vietnamese: ["hôn"] },
    { chinese: "结婚", pinyin: "jié hūn", english: ["to get married"], vietnamese: ["kết hôn"] },
    { chinese: "婚妻", pinyin: "hūn qī", english: ["fiancee"], vietnamese: ["hôn thê"] },
]

// --- DOM ELEMENTS ---
const questionDisplay = document.getElementById('question-display');
const pinyinDisplay = document.getElementById('pinyin-display');
const answerInput = document.getElementById('answer-input');
const submitBtn = document.getElementById('submit-btn');
const feedbackMessage = document.getElementById('feedback-message');
const scoreDisplay = document.getElementById('score-display');
const switchModeBtn = document.getElementById('switch-mode-btn');

// --- QUIZ STATE ---
let currentWordIndex = 0;
let wrongAttempts = 0;
let score = 0;
let currentMode = 'char_to_meaning';

// --- FUNCTIONS ---

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadNextWord() {
    if (currentWordIndex >= vocab.length) {
        questionDisplay.textContent = 'Quiz Complete!';
        pinyinDisplay.textContent = `Final Score: ${score} / ${vocab.length}`;
        answerInput.style.display = 'none';
        submitBtn.style.display = 'none';
        return;
    }

    wrongAttempts = 0;
    answerInput.value = '';
    feedbackMessage.textContent = '\u00A0';
    feedbackMessage.className = '';
    pinyinDisplay.textContent = '\u00A0'; // CHANGED: Clear pinyin on new word
    answerInput.focus();

    const currentWord = vocab[currentWordIndex];

    if (currentMode === 'char_to_meaning') {
        questionDisplay.textContent = currentWord.chinese;
        // Pinyin is now hidden on load
        questionDisplay.classList.add('character');
        questionDisplay.classList.remove('meaning');
        answerInput.placeholder = "Type meaning (EN or VI)...";
    } else { // 'meaning_to_char'
        // OLD
        // const isEnglish = Math.random() > 0.5;
        // const meaning = isEnglish ? currentWord.english[0] : currentWord.vietnamese[0];
        
        //NEW
        const meaning = currentWord.vietnamese[0];
        questionDisplay.textContent = meaning;
        // pinyinDisplay is already cleared above, so nothing shows here
        questionDisplay.classList.add('meaning');
        questionDisplay.classList.remove('character');
        answerInput.placeholder = "Type the Chinese characters...";
    }
}

function checkAnswer() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    if (!userAnswer) return;

    const currentWord = vocab[currentWordIndex];
    let isCorrect = false;

    if (currentMode === 'char_to_meaning') {
        const correctAnswers = [...currentWord.english, ...currentWord.vietnamese].map(ans => ans.toLowerCase());
        isCorrect = correctAnswers.includes(userAnswer);
    } else { // 'meaning_to_char'
        isCorrect = (userAnswer === currentWord.chinese);
    }

    if (isCorrect) {
        handleCorrectAnswer();
    } else {
        handleWrongAnswer();
    }
}

function handleCorrectAnswer() {
    score++;
    scoreDisplay.textContent = score;
    feedbackMessage.textContent = 'Correct!';
    feedbackMessage.className = 'feedback-correct';

    const currentWord = vocab[currentWordIndex];
    // ADDED: Show pinyin on correct answer, but only in the right mode
    if (currentMode === 'char_to_meaning') {
        pinyinDisplay.textContent = currentWord.pinyin;
    }
    
    setTimeout(() => {
        currentWordIndex++;
        loadNextWord();
    }, 1800); // Increased delay slightly to allow time to see pinyin
}

function handleWrongAnswer() {
    wrongAttempts++;
    feedbackMessage.className = 'feedback-wrong';
    answerInput.value = '';

    if (wrongAttempts >= 3) {
        const currentWord = vocab[currentWordIndex];
        let correctAnswerText;

        if (currentMode === 'char_to_meaning') {
            // ADDED: Show pinyin after 3 wrong attempts
            pinyinDisplay.textContent = currentWord.pinyin;
            // OLD
            // correctAnswerText = `${currentWord.english[0]} / ${currentWord.vietnamese[0]}`;

            // NEW
            correctAnswerText = currentWord.vietnamese[0];
        } else {
            correctAnswerText = currentWord.chinese;
        }

        feedbackMessage.innerHTML = `The correct answer is: <br><strong>${correctAnswerText}</strong>`;
        
        setTimeout(() => {
            currentWordIndex++;
            loadNextWord();
        }, 6000);

    } else {
        feedbackMessage.textContent = `Incorrect. Try again. (${wrongAttempts}/3)`;
    }
}

function switchMode() {
    if (currentMode === 'char_to_meaning') {
        currentMode = 'meaning_to_char';
        switchModeBtn.textContent = 'Switch to: Character ➔ Meaning';
    } else {
        currentMode = 'char_to_meaning';
        switchModeBtn.textContent = 'Switch to: Meaning ➔ Character';
    }
    startQuiz();
}

function startQuiz() {
    currentWordIndex = 0;
    score = 0;
    scoreDisplay.textContent = score;
    answerInput.style.display = 'block';
    submitBtn.style.display = 'block';
    shuffleArray(vocab);
    loadNextWord();
}

// --- EVENT LISTENERS ---
submitBtn.addEventListener('click', checkAnswer);
answerInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});
switchModeBtn.addEventListener('click', switchMode);

// --- INITIALIZE ---
startQuiz();
