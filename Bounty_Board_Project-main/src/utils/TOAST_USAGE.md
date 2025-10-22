# 🎨 نظام الرسائل الإبداعي (Toast System)

## ✨ المميزات
- 🎭 تصميم إبداعي مع gradients جميلة
- 🎬 أنيميشن 3D احترافي
- 📱 متجاوب 100%
- 🎯 سهل الاستخدام
- 🎨 5 أنواع من الرسائل

## 📦 الاستخدام

### 1. استيراد النظام
```javascript
import { showMessage } from '../utils/toast';
```

### 2. الأنواع المتاحة

#### ✅ Success (نجاح)
```javascript
showMessage.success("تم الحفظ بنجاح! 🎉");
showMessage.success("Successfully signed in!");
```

#### ❌ Error (خطأ)
```javascript
showMessage.error("حدث خطأ ما!");
showMessage.error("Please enter a valid email");
```

#### ⚠️ Warning (تحذير)
```javascript
showMessage.warning("انتبه! هذا الإجراء لا يمكن التراجع عنه");
showMessage.warning("Please complete your profile");
```

#### ℹ️ Info (معلومات)
```javascript
showMessage.info("تم إرسال الرابط إلى بريدك");
showMessage.info("Check your email for verification link");
```

#### ⏳ Loading (تحميل)
```javascript
const loadingToast = showMessage.loading("جاري التحميل...");
// بعد انتهاء العملية
showMessage.dismiss(loadingToast);
```

### 3. خيارات إضافية

#### تغيير المدة
```javascript
showMessage.success("رسالة قصيرة", { duration: 2000 }); // 2 ثانية
showMessage.error("رسالة طويلة", { duration: 5000 }); // 5 ثواني
```

#### تغيير الموقع
```javascript
showMessage.info("رسالة في الأعلى", { position: 'top-center' });
showMessage.info("رسالة في الأسفل", { position: 'bottom-center' });
```

#### إغلاق رسالة معينة
```javascript
const toastId = showMessage.success("رسالة");
// لإغلاقها
showMessage.dismiss(toastId);
```

#### إغلاق جميع الرسائل
```javascript
showMessage.dismissAll();
```

### 4. استخدام Promise
للعمليات غير المتزامنة:

```javascript
import { showPromise } from '../utils/toast';

const saveData = async () => {
  const promise = fetch('/api/save', { method: 'POST' });
  
  await showPromise(promise, {
    loading: 'جاري الحفظ...',
    success: 'تم الحفظ بنجاح! 🎉',
    error: 'فشل الحفظ'
  });
};
```

## 🎨 الألوان والتصاميم

| النوع | اللون | الأيقونة |
|------|------|---------|
| Success | Purple Gradient | ✓ |
| Error | Pink/Red Gradient | ✗ |
| Warning | Orange Gradient | ⚠ |
| Info | Blue Gradient | ℹ |
| Loading | Teal/Pink Gradient | ⟳ |

## 📝 أمثلة كاملة

### مثال في Login:
```javascript
import { showMessage } from '../../utils/toast';

const handleLogin = async () => {
  if (!email || !password) {
    showMessage.error("الرجاء إدخال البريد وكلمة المرور");
    return;
  }
  
  const loading = showMessage.loading("جاري تسجيل الدخول...");
  
  try {
    await login(email, password);
    showMessage.dismiss(loading);
    showMessage.success("تم تسجيل الدخول بنجاح! 🎉");
  } catch (error) {
    showMessage.dismiss(loading);
    showMessage.error("فشل تسجيل الدخول");
  }
};
```

### مثال في Form Validation:
```javascript
const validateForm = () => {
  if (!title) {
    showMessage.error("الرجاء إدخال العنوان");
    return false;
  }
  
  if (!description) {
    showMessage.warning("الوصف مطلوب");
    return false;
  }
  
  showMessage.success("تم التحقق من البيانات ✓");
  return true;
};
```

## 🚀 استبدال message من Antd

### قبل:
```javascript
import { message } from 'antd';
message.success("نجح!");
message.error("فشل!");
```

### بعد:
```javascript
import { showMessage } from '../utils/toast';
showMessage.success("نجح! 🎉");
showMessage.error("فشل!");
```

## 💡 نصائح

1. ✅ استخدم الإيموجي لجعل الرسائل أكثر جاذبية
2. ✅ اجعل الرسائل قصيرة ومفهومة
3. ✅ استخدم النوع المناسب للرسالة
4. ❌ لا تعرض رسائل كثيرة في وقت واحد
5. ❌ لا تجعل الرسائل طويلة جداً

---
Made with ❤️ for Bounty Board

