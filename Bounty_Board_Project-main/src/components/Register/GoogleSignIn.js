import { Button } from 'antd';

const GoogleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M20.16 12.6932C20.16 12.0905 20.1059 11.511 20.0054 10.9546H12V14.2425H16.5745C16.3775 15.3051 15.7786 16.2053 14.8784 16.808V18.9407H17.6254C19.2327 17.461 20.16 15.2819 20.16 12.6932Z" fill="#4285F4" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12 21C14.295 21 16.2191 20.2389 17.6254 18.9407L14.8784 16.8079C14.1173 17.3179 13.1436 17.6193 12 17.6193C9.78611 17.6193 7.91224 16.1241 7.24383 14.115H4.40405V16.3173C5.80269 19.0952 8.67724 21 12 21Z" fill="#34A853" />
        <path fillRule="evenodd" clipRule="evenodd" d="M7.24384 14.1151C7.07384 13.6051 6.97725 13.0603 6.97725 12.5001C6.97725 11.9399 7.07384 11.3951 7.24384 10.8851V8.6828H4.40406C3.82838 9.8303 3.49997 11.1285 3.49997 12.5001C3.49997 13.8717 3.82838 15.1699 4.40406 16.3174L7.24384 14.1151Z" fill="#FBBC05" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12 7.38075C13.2479 7.38075 14.3684 7.80961 15.2493 8.65189L17.6873 6.21393C16.2152 4.84234 14.2911 4.00006 12 4.00006C8.67724 4.00006 5.80269 5.90484 4.40405 8.6828L7.24383 10.8851C7.91224 8.87598 9.78611 7.38075 12 7.38075Z" fill="#EA4335" />
    </svg>
);

const GoogleSignInButton = () => {
    const handleGoogleSignIn = () => {
        console.log('Google sign-in clicked');
    };

    return (
        <Button
            type="default"
            size="large"
            onClick={handleGoogleSignIn}
            className="btn-google-signin w-full h-[54px] !flex !items-center !justify-center gap-2"
            style={{
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '1.5',
                transition: 'all 0.3s ease',
            }}
        >
            <GoogleIcon />
            <span className="text-white">
                Sign in with Google
            </span>
        </Button>
    );
};

export default GoogleSignInButton;