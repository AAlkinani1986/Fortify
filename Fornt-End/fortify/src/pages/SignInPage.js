const SignInPage = () => {
    return <div class="background">
    <div class="wrap">
  <h2>Welcome back!</h2>
  <form action="#">
    <div class="input-box">
      <input type="text" placeholder="Enter your username or email address" required />
    </div>

    <div class="input-box">
      <input type="text" placeholder="Enter your password" required />
    </div>
    
    <div class="input-box button">
        <input type="Submit" value="Sign in" />
      </div>

    <div class="text">
      <h3>Don't have an account? <a href="/signup">Sign up here</a></h3>
    </div>
    </form>
    </div>
  </div>
  }
  export default SignInPage