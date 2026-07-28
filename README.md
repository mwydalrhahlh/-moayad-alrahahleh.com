# الموقع الرسمي للمحامي مؤيد رحاحله

موقع إلكتروني لمكتب المحاماة والاستشارات القانونية، مصمم بأسلوب فاخر ومتجاوب مع جميع الأجهزة.

## هيكل المشروع

```
├── index.html          # الصفحة الرئيسية
├── 404.html            # صفحة الخطأ 404
├── CNAME               # إعداد الدومين المخصص لـ GitHub Pages
├── robots.txt          # ملف搜索引擎
├── sitemap.xml         # خريطة الموقع لـ SEO
├── .gitignore          # ملف تجاهل Git
├── README.md           # هذا الملف
├── css/
│   └── style.css       # التنسيقات المخصصة
├── js/
│   └── main.js         # ملف JavaScript الرئيسي
└── assets/             # مجلد للملفات المستقبلية (صور، إلخ)
```

## التقنيات المستخدمة

- **Tailwind CSS** (CDN) - إطار عمل CSS
- **FontAwesome** - أيقونات
- **Google Fonts** (Amiri + Readex Pro) - خطوط عربية فاخرة

## تعليمات النشر على GitHub Pages

### 1. إنشاء مستودع على GitHub

1. افتح [GitHub](https://github.com) وسجل الدخول
2. اضغط على **New Repository**
3. اسم المستودع: `moayad-alrahahleh` (أو أي اسم)
4. اختيار **Public**
5. لا تضع علامة على Initialize with README
6. اضغط **Create repository**

### 2. رفع الملفات إلى GitHub

نفذ الأوامر التالية في terminal:

```bash
# الانتقال إلى مجلد المشروع
cd "/Users/mrik/Desktop/muayid rahahilih"

# إنشاء مستودع Git محلي
git init

# إضافة جميع الملفات
git add .

# إنشاء أول commit
git commit -m " initial commit - الموقع الرسمي للمحامي مؤيد رحاحله"

# ربط المستودع المحلي بالمستودع على GitHub
git branch -M main
git remote add origin https://github.com/[اسم-المستخدم]/moayad-alrahahleh.git

# رفع الملفات
git push -u origin main
```

**ملاحظة:** استبدل `[اسم-المستخدم]` باسم مستخدم GitHub الخاص بك.

### 3. تفعيل GitHub Pages

1. اذهب إلى مستودعك على GitHub
2. اضغط على **Settings**
3. من القائمة الجانبية اختر **Pages**
4. تحت **Branch** اختر `main` ثم `/ (root)` واضغط **Save**
5. انتظر دقيقة، سيظهر رابط الموقع: `https://[اسم-المستخدم].github.io/moayad-alrahahleh/`

### 4. ربط الدومين من Hostinger (moayad-alrahahleh.com)

#### في GitHub:
1. اذهب إلى **Settings > Pages** في مستودعك
2. في حقل **Custom domain** اكتب: `moayad-alrahahleh.com`
3. اضغط **Save** (سيتم إنشاء ملف CNAME تلقائياً - الملف موجود مسبقاً)

#### في Hostinger:
1. سجل الدخول إلى حساب Hostinger
2. اذهب إلى **DNS Settings** للدومين `moayad-alrahahleh.com`
3. أضف السجلات التالية:

| النوع | الاسم | القيمة |
|-------|------|--------|
| A | @ | `185.199.108.153` |
| A | @ | `185.199.109.153` |
| A | @ | `185.199.110.153` |
| A | @ | `185.199.111.153` |
| CNAME | www | `[اسم-المستخدم].github.io` |

**ملاحظة:** استبدل `[اسم-المستخدم]` باسم مستخدم GitHub الخاص بك.

4. انتظر من 10 دقائق إلى 48 ساعة لنشر DNS

### 5. تفعيل HTTPS

بعد ربط الدومين:
1. اذهب إلى **Settings > Pages** في GitHub
2. ضع علامة على **Enforce HTTPS**
3. بعد دقائق سيصبح موقعك متاحاً عبر `https://moayad-alrahahleh.com`

## تحسين محركات البحث (SEO)

- تمت إضافة `sitemap.xml` و `robots.txt`
- تمت إضافة بطاقات Open Graph للتواصل الاجتماعي
- تمت إضافة وصف meta tags

## للمطور

لتعديل التنسيقات: عدل ملف `css/style.css`
لتعديل الوظائف التفاعلية: عدل ملف `js/main.js`
