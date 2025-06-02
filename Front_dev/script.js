const translations = {
    "pt-BR": {
        "selected-language": "Português (Brasil) ⯆",
        "email-placeholder": "E-mail",
        "password-placeholder": "Senha",
        "login-button": "Entrar",
        "forgot-account": "Esqueceu a conta?",
        "create-account": "Criar nova conta",
    },
    "pt-PT": {
      "selected-language": "Português (Portugal) ⯆",
      "email-placeholder": "Endereço de E-mail",
      "password-placeholder": "Palavra-passe",
      "login-button": "Entrar",
      "forgot-account": "Esqueceu a conta?",
      "create-account": "Criar nova conta",
    },
    "en": {
      "selected-language": "English (US) ⯆",
      "email-placeholder": "E-mail",
      "password-placeholder": "Password",
      "login-button": "Log In",
      "forgot-account": "Forgot account?",
      "create-account": "Create new account",
    },
    "es": {
      "selected-language": "Español ⯆",
      "email-placeholder": "Correo electrónico",
      "password-placeholder": "Contraseña",
      "login-button": "Entrar",
      "forgot-account": "¿Olvidaste la cuenta?",
      "create-account": "Crear cuenta nueva",
    },
    "fr": {
      "selected-language": "Français ⯆",
      "email-placeholder": "E-mail",
      "password-placeholder": "Mot de passe",
      "login-button": "Se connecter",
      "forgot-account": "Mot de passe oublié?",
      "create-account": "Créer un nouveau compte",
    },
    "de": {
      "selected-language": "Deutsch ⯆",
      "email-placeholder": "E-Mail",
      "password-placeholder": "Passwort",
      "login-button": "Anmelden",
      "forgot-account": "Konto vergessen?",
      "create-account": "Neues Konto erstellen",
    },
    "it": {
      "selected-language": "Italiano ⯆",
      "email-placeholder": "E-mail",
      "password-placeholder": "Password",
      "login-button": "Accedi",
      "forgot-account": "Hai dimenticato l'account?",
      "create-account": "Crea un nuovo account",
    },
    "zh": {
      "selected-language": "中文 (简体) ⯆",
      "email-placeholder": "电子邮件",
      "password-placeholder": "密码",
      "login-button": "登录",
      "forgot-account": "忘记账户?",
      "create-account": "创建新账户",
    },
    "ar": {
      "selected-language": "العربية ⯆",
      "email-placeholder": "البريد الإلكتروني",
      "password-placeholder": "كلمة السر",
      "login-button": "تسجيل الدخول",
      "forgot-account": "نسيت الحساب?",
      "create-account": "إنشاء حساب جديد",
    },
    "ru": {
      "selected-language": "Русский ⯆",
      "email-placeholder": "Электронная почта",
      "password-placeholder": "Пароль",
      "login-button": "Войти",
      "forgot-account": "Забыли аккаунт?",
      "create-account": "Создать новый аккаунт",
    },
    "ja": {
      "selected-language": "日本語 ⯆",
      "email-placeholder": "Eメール",
      "password-placeholder": "パスワード",
      "login-button": "ログイン",
      "forgot-account": "アカウントを忘れましたか?",
      "create-account": "新しいアカウントを作成",
    },
    "ko": {
      "selected-language": "한국어 ⯆",
      "email-placeholder": "이메일",
      "password-placeholder": "비밀번호",
      "login-button": "로그인",
      "forgot-account": "계정을 잊으셨습니까?",
      "create-account": "새 계정 만들기",
    },
    "hi": {
      "selected-language": "हिन्दी ⯆",
      "email-placeholder": "ईमेल",
      "password-placeholder": "पासवर्ड",
      "login-button": "लॉग इन करें",
      "forgot-account": "खाता भूल गए?",
      "create-account": "नया खाता बनाएं",
    },
  };
  
  function toggleDropdown() {
    const options = document.getElementById("language-options");
    options.classList.toggle("show");
  }
  
  function changeLanguage(languageCode) {
    const languageData = translations[languageCode];

    document.getElementById("selected-language").innerText = languageData["selected-language"];
    document.querySelector('input[type="email"]').setAttribute("placeholder", languageData["email-placeholder"]);
    document.querySelector('input[type="password"]').setAttribute("placeholder", languageData["password-placeholder"]);
    document.querySelector('button[type="submit"]').innerText = languageData["login-button"];
    document.querySelector('.links a:nth-child(1)').innerText = languageData["forgot-account"];
    document.querySelector('.links a:nth-child(2)').innerText = languageData["create-account"];
  
    localStorage.setItem('selectedLanguage', languageCode);
  
    toggleDropdown();
  }
  
  function applySavedLanguage() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'pt-BR';  
    changeLanguage(savedLanguage);
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    applySavedLanguage();
  });
  
  document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Login enviado!");
  });

  function toggleDropdown() {
    const options = document.getElementById("language-options");
    options.classList.toggle("show");
  }
  
  document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
});
  
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const emailInput = document.querySelector("input[type='email']");
    const passwordInput = document.querySelector("input[type='password']");
  
    emailInput.value = "";
    passwordInput.value = "";
  
    const form = document.getElementById("login-form");
    form.classList.add("fade-out");
  
    
    window.location.href = "index2.html";
});
  
