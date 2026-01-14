# Dokumentasi Komponen UI - Finebank Project
## Berdasarkan Konsep Atomic Design

---

## 1. Pages: signIn ([src/pages/signIn.jsx](src/pages/signIn.jsx))

**Layouts:**
- AuthLayout

**Fragments:**
- FormSignIn

**Elements:**
- Logo
- LabeledInput
- CheckBox
- Button
- AppSnackbar

---

## 2. Pages: signUp ([src/pages/signUp.jsx](src/pages/signUp.jsx))

**Layouts:**
- AuthLayout

**Fragments:**
- FormSignUp

**Elements:**
- Logo
- Button
- AppSnackbar

---

## 3. Pages: dashboard ([src/pages/dashboard.jsx](src/pages/dashboard.jsx))

**Layouts:**
- MainLayout

**Fragments:**
- CardBalance
- CardGoal
- CardUpcomingBill
- CardRecentTransaction
- CardStatistic
- CardExpenseBeakdown

**Elements:**
- Logo
- Input
- Icon
- Card
- BarsDataset
- DotsMobileStepper
- AppSnackbar

---

## 4. Pages: balance ([src/pages/balance.jsx](src/pages/balance.jsx))

**Layouts:**
- MainLayout

**Fragments:**
- (Belum ada fragments khusus, hanya text "Test Balance Page")

**Elements:**
- Logo
- Input
- Icon

---

## 5. Pages: error ([src/pages/error.jsx](src/pages/error.jsx))

**Layouts:**
- (Tidak menggunakan layout khusus)

**Fragments:**
- (Tidak ada fragments)

**Elements:**
- Logo

---

## Ringkasan Komponen Berdasarkan Atomic Design

### Elements (Atoms)
Komponen terkecil yang tidak dapat dipecah lagi:
1. Logo
2. Button
3. Input
4. LabeledInput
5. CheckBox
6. Icon
7. Card
8. AppSnackbar
9. BarsDataset
10. DotsMobileStepper
11. CompositionExample

### Fragments (Molecules)
Gabungan dari beberapa Elements:
1. FormSignIn
2. FormSignUp
3. CardBalance
4. CardGoal
5. CardUpcomingBill
6. CardRecentTransaction
7. CardStatistic
8. CardExpenseBeakdown

### Layouts (Organisms)
Template layout yang mengatur struktur halaman:
1. AuthLayout (untuk halaman authentication)
2. MainLayout (untuk halaman dashboard & internal pages)

### Pages (Templates/Pages)
Halaman lengkap yang siap digunakan:
1. signIn
2. signUp
3. dashboard
4. balance
5. error
