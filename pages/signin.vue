<template>
  <div>
    <template>
      <div class="signin_sec sign_up">
        <div class="mainformlogin">
          <div class="main_form">
            <img
              class="logo_img"
              src="../static/images/logo-no-background.png"
              alt="Local Image"
            />
            <div class="welcometit">
              <h1>Welcome back</h1>
              <p>Please enter your details to sign in</p>
            </div>

            <form @submit.prevent="onSubmit">
              <div class="form-group">
                <label for="email">Email address</label>
                <div class="input-wrapper">
                  <span class="icon">📧</span>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    v-model="email"
                    required
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="password">Password</label>
                <div class="input-wrapper">
                  <span class="icon">🔒</span>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    v-model="password"
                    required
                  />
                </div>
              </div>

              <!-- Remember Me and Forgot Password -->

              <div class="options">
                <label>
                  <span><input type="checkbox" /></span> Remember me
                </label>
                <a href="#">Forgot password?</a>
              </div>

              <!-- Submit Button -->
              <button type="submit" class="btn btn-primary">Sign in</button>
            </form>

            <!-- Divider Section -->
            <div class="divider">Or continue with</div>

            <!-- Social Login Buttons -->
            <div class="social-login">
              <button class="btn btn-google">
                <i class="fab fa-google"></i> Google
              </button>
              <button class="btn btn-apple">
                <i class="fab fa-apple"></i> Apple
              </button>
            </div>

            <!-- Sign Up Section -->
            <p class="signup">Don't have an account? <a href="#">Sign up</a></p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script></script>

<style scoped>
/* css starts */
/* top section */
.signin_sec.sign_up {
  padding-top: 19px;
  background: #f2f3f4;
}
.sign_up img.logo_img {
  width: 10%;
  margin: 0 auto;
}
.signin_sec .welcometit {
  text-align: center;
  padding-top: 10px;
}
.signin_sec .welcometit h1 {
  font-size: 55px;
  font-weight: 700;
}
.social-login {
  display: flex;
  gap: 28px;
}
.signin_sec .welcometit p {
  font-size: 31px;
}
p.signup {
  margin: 0;
}
.signin_sec.sign_up .main_form {
  margin: 0 auto;
  background: #fff;
  padding: 0px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  padding: 30px;
}
.signin_sec .mainformlogin {
  width: 59%;
  margin: 0 auto;
}
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f9fafb;
}
/* Card */
.login-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 24px;
  width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Logo */
.logo img {
  width: 50px;
  margin-bottom: 16px;
}

.options label {
  display: flex;
  align-items: center;
  gap: 22px;
}
/* Title */
h2 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
}

p {
  color: #6b7280;
  margin-bottom: 24px;
}

/* Form */
.form-group {
  margin-bottom: 16px;
  text-align: left;
}

label {
  display: block;
  font-size: 30px;
  margin-bottom: 8px;
}

.input-wrapper {
  position: relative;
}

.input-wrapper .icon {
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  font-size: 30px;
  color: #6b7280;
}

input {
  width: 100%;
  padding: 10px 12px 10px 65px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 30px;
}

/* Options */
.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin-bottom: 24px;
}

.options a {
  color: #3b82f6;
  text-decoration: none;
  font-size: 30px;
}

/* Buttons */
.btn {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 30px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.btn-google {
  background-color: #f4f4f4;
  color: #6b7280;
  margin-bottom: 8px;
  border: 1px solid #ccc;
}

.btn-apple {
  color: #6b7280;
  border: 1px solid #ccc;
}

/* Divider */
.divider {
  display: flex;
  align-items: center;
  text-align: center;
  color: #6b7280;
  font-size: 30px;
  margin: 52px 0;
}

.divider::before,
.divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background: #d1d5db;
  margin: 0 8px;
}

/* Signup */
.signup {
  font-size: 30px;
  padding: 40px;
  text-align: center;
}
.signin_sec form {
  padding-top: 42px;
}
.signup a {
  color: #3b82f6;
  text-decoration: none;
}
/* css ends */

/* responsive starts */

@media screen and (max-width: 2000px) {
  .signin_sec .welcometit h1 {
    font-size: 45px;
  }
  .signin_sec .welcometit p,
  .signin_sec label,
  .signin_sec input,
  .options a,
  .signin_sec .btn,
  .divider,
  .signin_sec .signup {
    font-size: 25px;
  }
  .signin_sec form {
    padding-top: 22px;
  }
  .divider {
    margin: 36px 0;
  }
  .signup {
    padding: 25px;
  }
  .sign_up img.logo_img {
    width: 8%;
  }
}

@media screen and (max-width: 1600px) {
  .signin_sec .welcometit h1 {
    font-size: 40px;
  }
  .signin_sec .welcometit p,
  .signin_sec label,
  .signin_sec input,
  .options a,
  .signin_sec .btn,
  .divider,
  .signin_sec .signup {
    font-size: 20px;
  }
  .signin_sec form {
    padding-top: 20px;
  }
  .divider {
    margin: 30px 0;
  }
  .signup {
    padding: 22px;
  }
  .sign_up img.logo_img {
    width: 8%;
  }
  .options label {
    gap: 9px;
  }
}
@media screen and (max-width: 990px) {
  .signin_sec .mainformlogin {
    width: 79%;
  }

  .signin_sec .welcometit h1 {
    font-size: 35px;
  }
  .signin_sec .welcometit p,
  .signin_sec label,
  .signin_sec input,
  .options a,
  .signin_sec .btn,
  .divider,
  .signin_sec .signup {
    font-size: 16px;
  }
  .signin_sec form {
    padding-top: 15px;
  }
  .divider {
    margin: 25px 0;
  }
  .signup {
    padding: 20px;
  }
  .sign_up img.logo_img {
    width: 15%;
  }
  .options label {
    gap: 9px;
  }
}

/* mobile */
@media screen and (max-width: 767px) {
  .signin_sec .mainformlogin {
    width: 98%;
  }

  .signin_sec .welcometit h1 {
    font-size: 30px;
  }
  .signin_sec .welcometit p,
  .signin_sec label,
  .signin_sec input,
  .options a,
  .signin_sec .btn,
  .divider,
  .signin_sec .signup {
    font-size: 15px;
  }
  .signin_sec form {
    padding-top: 15px;
  }
  .divider {
    margin: 20px 0;
  }
  .sign_up img.logo_img {
    width: 30%;
  }
  .input-wrapper .icon[data-v-142fdc67] {
    font-size: 21px;
  }
}
@media screen and (max-width: 350px) {
  .signin_sec .mainformlogin {
    width: 99%;
  }

  .signin_sec .welcometit h1 {
    font-size: 25px;
  }
  .signin_sec .welcometit p,
  .signin_sec label,
  .signin_sec input,
  .options a,
  .signin_sec .btn,
  .divider,
  .signin_sec .signup {
    font-size: 13px;
  }
  .signin_sec.sign_up .main_form {
    padding: 11px;
  }
}
/* responsive ends */
</style>
