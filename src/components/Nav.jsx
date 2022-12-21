import Navlink from './atoms/Navlink'

function Nav() {
  return (
    <nav class='flex items-center pt-2 sm:py-8 justify-between tracking-wider'>
      <div>
        <svg
          width='60'
          height='29'
          viewBox='0 0 60 29'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1.77734 4.73633H4.89258V20H1.77734V4.73633ZM8.84766 4.73633H21.8457V7.45117H11.9434V10.498H20.7129V13.0469H11.9434V17.2949H22.0508V20H8.84766V4.73633ZM25.4883 4.73633H31.084C32.7181 4.73633 34.1374 4.91211 35.3418 5.26367C36.5462 5.61523 37.5423 6.11979 38.3301 6.77734C39.1243 7.42839 39.7135 8.22266 40.0977 9.16016C40.4883 10.0911 40.6836 11.1393 40.6836 12.3047C40.6836 13.4115 40.4915 14.4368 40.1074 15.3809C39.7233 16.3184 39.1374 17.1322 38.3496 17.8223C37.5618 18.5059 36.5658 19.043 35.3613 19.4336C34.1569 19.8177 32.7376 20.0098 31.1035 20.0098L25.4883 20V4.73633ZM31.8457 17.3242C32.7702 17.3242 33.5807 17.207 34.2773 16.9727C34.974 16.7318 35.5534 16.3932 36.0156 15.957C36.4844 15.5208 36.8359 14.9935 37.0703 14.375C37.3047 13.7565 37.4219 13.0664 37.4219 12.3047C37.4219 11.556 37.3047 10.8822 37.0703 10.2832C36.8359 9.67773 36.4844 9.16667 36.0156 8.75C35.5534 8.32682 34.974 8.0013 34.2773 7.77344C33.5807 7.54557 32.7702 7.43164 31.8457 7.43164H28.584V17.3242H31.8457ZM42.8613 12.2754C42.8613 11.1882 43.0664 10.1758 43.4766 9.23828C43.8867 8.29427 44.4792 7.47721 45.2539 6.78711C46.0352 6.09049 46.9857 5.54362 48.1055 5.14648C49.2318 4.74935 50.5046 4.55078 51.9238 4.55078C53.1673 4.55078 54.3066 4.67773 55.3418 4.93164C56.3835 5.17904 57.3503 5.5599 58.2422 6.07422L56.8164 8.41797C56.5495 8.24219 56.2402 8.08594 55.8887 7.94922C55.5436 7.8125 55.1725 7.69857 54.7754 7.60742C54.3848 7.50977 53.9779 7.4349 53.5547 7.38281C53.138 7.33073 52.7246 7.30469 52.3145 7.30469C51.3249 7.30469 50.4427 7.42839 49.668 7.67578C48.8932 7.91667 48.2389 8.25846 47.7051 8.70117C47.1777 9.13737 46.7741 9.66146 46.4941 10.2734C46.2207 10.8789 46.084 11.5462 46.084 12.2754C46.084 13.0306 46.2272 13.724 46.5137 14.3555C46.8001 14.987 47.2135 15.5339 47.7539 15.9961C48.3008 16.4518 48.9648 16.8099 49.7461 17.0703C50.5339 17.3242 51.4225 17.4512 52.4121 17.4512C52.8613 17.4512 53.3073 17.4186 53.75 17.3535C54.1927 17.2884 54.6191 17.2005 55.0293 17.0898C55.446 16.9727 55.8464 16.8359 56.2305 16.6797C56.6146 16.5169 56.9727 16.3411 57.3047 16.1523L58.7305 18.4961C57.8971 19.0299 56.9336 19.4499 55.8398 19.7559C54.7461 20.0553 53.584 20.2051 52.3535 20.2051C50.7845 20.2051 49.4076 20.0033 48.2227 19.5996C47.0378 19.1895 46.0482 18.6296 45.2539 17.9199C44.4596 17.2038 43.8607 16.3639 43.457 15.4004C43.0599 14.4303 42.8613 13.3887 42.8613 12.2754Z'
            fill='black'
          />
          <path
            d='M1.21582 22.4209H3.66211C3.96094 22.4209 4.2207 22.4531 4.44141 22.5176C4.66406 22.5801 4.84863 22.667 4.99512 22.7783C5.1416 22.8896 5.25 23.0225 5.32031 23.1768C5.39258 23.3291 5.42871 23.4941 5.42871 23.6719C5.42871 23.9629 5.33691 24.2178 5.15332 24.4365C5.36426 24.5615 5.52148 24.7236 5.625 24.9229C5.72852 25.1221 5.78027 25.3486 5.78027 25.6025C5.78027 25.8154 5.74414 26.0078 5.67188 26.1797C5.60156 26.3516 5.49316 26.499 5.34668 26.6221C5.20215 26.7432 5.01855 26.8369 4.7959 26.9033C4.5752 26.9678 4.31445 27 4.01367 27H1.21582V22.4209ZM4.01953 24.1787C4.09961 24.1787 4.17773 24.1816 4.25391 24.1875C4.38477 24.0625 4.4502 23.9199 4.4502 23.7598C4.4502 23.5938 4.38477 23.4658 4.25391 23.376C4.125 23.2842 3.93555 23.2383 3.68555 23.2383H2.14453V24.1787H4.01953ZM4.03711 26.1914C4.28711 26.1914 4.47656 26.1377 4.60547 26.0303C4.73633 25.9229 4.80176 25.7715 4.80176 25.5762C4.80176 25.3809 4.73633 25.2285 4.60547 25.1191C4.47656 25.0098 4.28711 24.9551 4.03711 24.9551H2.14453V26.1914H4.03711ZM6.40723 25.2715C6.40723 25.0234 6.45703 24.791 6.55664 24.5742C6.6582 24.3574 6.80176 24.168 6.9873 24.0059C7.1748 23.8438 7.40039 23.7158 7.66406 23.6221C7.92969 23.5283 8.22754 23.4814 8.55762 23.4814C8.8877 23.4814 9.18457 23.5283 9.44824 23.6221C9.71387 23.7158 9.93945 23.8438 10.125 24.0059C10.3125 24.168 10.4561 24.3574 10.5557 24.5742C10.6572 24.791 10.708 25.0234 10.708 25.2715C10.708 25.5195 10.6572 25.752 10.5557 25.9688C10.4561 26.1855 10.3125 26.375 10.125 26.5371C9.93945 26.6992 9.71387 26.8271 9.44824 26.9209C9.18457 27.0146 8.8877 27.0615 8.55762 27.0615C8.22754 27.0615 7.92969 27.0146 7.66406 26.9209C7.40039 26.8271 7.1748 26.6992 6.9873 26.5371C6.80176 26.375 6.6582 26.1855 6.55664 25.9688C6.45703 25.752 6.40723 25.5195 6.40723 25.2715ZM7.31836 25.2715C7.31836 25.4102 7.3457 25.542 7.40039 25.667C7.45703 25.79 7.53809 25.8994 7.64355 25.9951C7.75098 26.0889 7.88086 26.1641 8.0332 26.2207C8.1875 26.2754 8.3623 26.3027 8.55762 26.3027C8.75293 26.3027 8.92676 26.2754 9.0791 26.2207C9.2334 26.1641 9.36328 26.0889 9.46875 25.9951C9.57617 25.8994 9.65723 25.79 9.71191 25.667C9.76855 25.542 9.79688 25.4102 9.79688 25.2715C9.79688 25.1328 9.76855 25.001 9.71191 24.876C9.65723 24.751 9.57617 24.6416 9.46875 24.5479C9.36328 24.4521 9.2334 24.377 9.0791 24.3223C8.92676 24.2656 8.75293 24.2373 8.55762 24.2373C8.3623 24.2373 8.1875 24.2656 8.0332 24.3223C7.88086 24.377 7.75098 24.4521 7.64355 24.5479C7.53809 24.6416 7.45703 24.751 7.40039 24.876C7.3457 25.001 7.31836 25.1328 7.31836 25.2715ZM11.376 25.2715C11.376 25.0234 11.4258 24.791 11.5254 24.5742C11.627 24.3574 11.7705 24.168 11.9561 24.0059C12.1436 23.8438 12.3691 23.7158 12.6328 23.6221C12.8984 23.5283 13.1963 23.4814 13.5264 23.4814C13.8564 23.4814 14.1533 23.5283 14.417 23.6221C14.6826 23.7158 14.9082 23.8438 15.0938 24.0059C15.2812 24.168 15.4248 24.3574 15.5244 24.5742C15.626 24.791 15.6768 25.0234 15.6768 25.2715C15.6768 25.5195 15.626 25.752 15.5244 25.9688C15.4248 26.1855 15.2812 26.375 15.0938 26.5371C14.9082 26.6992 14.6826 26.8271 14.417 26.9209C14.1533 27.0146 13.8564 27.0615 13.5264 27.0615C13.1963 27.0615 12.8984 27.0146 12.6328 26.9209C12.3691 26.8271 12.1436 26.6992 11.9561 26.5371C11.7705 26.375 11.627 26.1855 11.5254 25.9688C11.4258 25.752 11.376 25.5195 11.376 25.2715ZM12.2871 25.2715C12.2871 25.4102 12.3145 25.542 12.3691 25.667C12.4258 25.79 12.5068 25.8994 12.6123 25.9951C12.7197 26.0889 12.8496 26.1641 13.002 26.2207C13.1562 26.2754 13.3311 26.3027 13.5264 26.3027C13.7217 26.3027 13.8955 26.2754 14.0479 26.2207C14.2021 26.1641 14.332 26.0889 14.4375 25.9951C14.5449 25.8994 14.626 25.79 14.6807 25.667C14.7373 25.542 14.7656 25.4102 14.7656 25.2715C14.7656 25.1328 14.7373 25.001 14.6807 24.876C14.626 24.751 14.5449 24.6416 14.4375 24.5479C14.332 24.4521 14.2021 24.377 14.0479 24.3223C13.8955 24.2656 13.7217 24.2373 13.5264 24.2373C13.3311 24.2373 13.1562 24.2656 13.002 24.3223C12.8496 24.377 12.7197 24.4521 12.6123 24.5479C12.5068 24.6416 12.4258 24.751 12.3691 24.876C12.3145 25.001 12.2871 25.1328 12.2871 25.2715ZM17.0742 24.1934H16.2393V23.543H17.0742V22.4678H17.9414V23.543H18.7764V24.1934H17.9414V27H17.0742V24.1934ZM19.3389 25.2803C19.3389 25.0264 19.3848 24.79 19.4766 24.5713C19.5703 24.3506 19.7061 24.1602 19.8838 24C20.0635 23.8379 20.2822 23.7109 20.54 23.6191C20.7998 23.5273 21.0957 23.4814 21.4277 23.4814C21.5723 23.4814 21.7178 23.4902 21.8643 23.5078C22.0107 23.5254 22.1514 23.5508 22.2861 23.584C22.4229 23.6152 22.5508 23.6533 22.6699 23.6982C22.7891 23.7412 22.8926 23.7891 22.9805 23.8418L22.5791 24.4951C22.3896 24.4072 22.21 24.3428 22.04 24.3018C21.8721 24.2607 21.7012 24.2402 21.5273 24.2402C21.3281 24.2402 21.1494 24.2666 20.9912 24.3193C20.833 24.3701 20.6982 24.4424 20.5869 24.5361C20.4775 24.6279 20.3936 24.7373 20.335 24.8643C20.2783 24.9893 20.25 25.126 20.25 25.2744C20.25 25.4229 20.2803 25.5605 20.3408 25.6875C20.4033 25.8125 20.4902 25.9209 20.6016 26.0127C20.7148 26.1025 20.8506 26.1738 21.0088 26.2266C21.1689 26.2773 21.3467 26.3027 21.542 26.3027C21.7568 26.3027 21.959 26.2725 22.1484 26.2119C22.3398 26.1514 22.5176 26.0703 22.6816 25.9688L23.083 26.6221C22.9795 26.6846 22.8672 26.7432 22.7461 26.7979C22.625 26.8506 22.4951 26.8965 22.3564 26.9355C22.2197 26.9746 22.0752 27.0049 21.9229 27.0264C21.7725 27.0498 21.6162 27.0615 21.4541 27.0615C21.124 27.0615 20.8281 27.0166 20.5664 26.9268C20.3047 26.8369 20.083 26.7129 19.9014 26.5547C19.7197 26.3945 19.5801 26.2061 19.4824 25.9893C19.3867 25.7725 19.3389 25.5361 19.3389 25.2803ZM23.8535 25.9102C23.8535 25.7441 23.8896 25.5928 23.9619 25.4561C24.0342 25.3193 24.1426 25.2021 24.2871 25.1045C24.4316 25.0049 24.6113 24.9287 24.8262 24.876C25.043 24.8213 25.2949 24.7939 25.582 24.7939C25.7949 24.7939 26.0186 24.8096 26.2529 24.8408C26.4893 24.8721 26.7324 24.9199 26.9824 24.9844C26.9727 24.875 26.9395 24.7744 26.8828 24.6826C26.8262 24.5889 26.7471 24.5088 26.6455 24.4424C26.5459 24.374 26.4248 24.3213 26.2822 24.2842C26.1416 24.2471 25.9814 24.2285 25.8018 24.2285C25.7041 24.2285 25.5967 24.2344 25.4795 24.2461C25.3623 24.2578 25.2412 24.2754 25.1162 24.2988C24.9912 24.3223 24.8672 24.3516 24.7441 24.3867C24.623 24.4219 24.5098 24.4639 24.4043 24.5127L24.1406 23.8008C24.2715 23.7539 24.4111 23.7109 24.5596 23.6719C24.71 23.6328 24.8633 23.5996 25.0195 23.5723C25.1758 23.543 25.332 23.5205 25.4883 23.5049C25.6445 23.4893 25.7959 23.4814 25.9424 23.4814C26.5889 23.4814 27.0693 23.6465 27.3838 23.9766C27.6982 24.3066 27.8555 24.8125 27.8555 25.4941V27H26.9883V26.6748C26.8984 26.7275 26.7998 26.7773 26.6924 26.8242C26.5869 26.8711 26.4717 26.9121 26.3467 26.9473C26.2217 26.9824 26.0869 27.0098 25.9424 27.0293C25.7998 27.0508 25.6484 27.0615 25.4883 27.0615C25.2188 27.0615 24.9814 27.0322 24.7764 26.9736C24.5732 26.915 24.4033 26.834 24.2666 26.7305C24.1299 26.627 24.0264 26.5059 23.9561 26.3672C23.8877 26.2266 23.8535 26.0742 23.8535 25.9102ZM24.7676 25.8809C24.7676 25.9375 24.7822 25.9922 24.8115 26.0449C24.8408 26.0957 24.8877 26.1416 24.9521 26.1826C25.0166 26.2217 25.0986 26.2539 25.1982 26.2793C25.2998 26.3027 25.4219 26.3145 25.5645 26.3145C25.7168 26.3145 25.8643 26.3008 26.0068 26.2734C26.1494 26.2461 26.2822 26.21 26.4053 26.165C26.5283 26.1201 26.6396 26.0684 26.7393 26.0098C26.8389 25.9512 26.9219 25.8906 26.9883 25.8281V25.6758C26.8555 25.6387 26.7236 25.6074 26.5928 25.582C26.4639 25.5566 26.3398 25.5371 26.2207 25.5234C26.1035 25.5078 25.9922 25.4971 25.8867 25.4912C25.7832 25.4854 25.6924 25.4824 25.6143 25.4824C25.4521 25.4824 25.3174 25.4932 25.21 25.5146C25.1025 25.5361 25.0156 25.5654 24.9492 25.6025C24.8828 25.6377 24.8359 25.6797 24.8086 25.7285C24.7812 25.7773 24.7676 25.8281 24.7676 25.8809ZM29.0273 23.543H29.8945V23.8359C30.1113 23.7031 30.3223 23.6113 30.5273 23.5605C30.7344 23.5078 30.9365 23.4814 31.1338 23.4814C31.4092 23.4814 31.6621 23.5254 31.8926 23.6133C32.123 23.7012 32.3203 23.834 32.4844 24.0117C32.6113 23.9141 32.7363 23.832 32.8594 23.7656C32.9824 23.6973 33.1055 23.6426 33.2285 23.6016C33.3516 23.5586 33.4766 23.5283 33.6035 23.5107C33.7305 23.4912 33.8613 23.4814 33.9961 23.4814C34.2793 23.4814 34.5361 23.5205 34.7666 23.5986C34.9971 23.6748 35.1934 23.7891 35.3555 23.9414C35.5195 24.0938 35.6455 24.2842 35.7334 24.5127C35.8232 24.7393 35.8682 25.002 35.8682 25.3008V27H35.0039V25.4414C35.0039 25.252 34.9766 25.083 34.9219 24.9346C34.8691 24.7842 34.7939 24.6582 34.6963 24.5566C34.6006 24.4531 34.4854 24.375 34.3506 24.3223C34.2178 24.2676 34.0713 24.2402 33.9111 24.2402C33.8232 24.2402 33.7334 24.249 33.6416 24.2666C33.5498 24.2822 33.46 24.3076 33.3721 24.3428C33.2861 24.3779 33.2051 24.4229 33.1289 24.4775C33.0527 24.5303 32.9863 24.5928 32.9297 24.665V27H32.0654V25.4414C32.0654 25.252 32.0381 25.083 31.9834 24.9346C31.9307 24.7842 31.8555 24.6582 31.7578 24.5566C31.6621 24.4531 31.5459 24.375 31.4092 24.3223C31.2744 24.2676 31.126 24.2402 30.9639 24.2402C30.8643 24.2402 30.7637 24.251 30.6621 24.2725C30.5625 24.292 30.4658 24.3203 30.3721 24.3574C30.2803 24.3945 30.1934 24.4395 30.1113 24.4922C30.0312 24.5449 29.959 24.6045 29.8945 24.6709V27H29.0273V23.543ZM37.8047 28.4121H36.9375V23.543H37.8047V23.8682C37.8809 23.8154 37.9707 23.7656 38.0742 23.7188C38.1777 23.6719 38.2891 23.6309 38.4082 23.5957C38.5273 23.5605 38.6504 23.5332 38.7773 23.5137C38.9043 23.4922 39.0312 23.4814 39.1582 23.4814C39.4512 23.4814 39.7197 23.5244 39.9639 23.6104C40.21 23.6963 40.4209 23.8174 40.5967 23.9736C40.7725 24.1299 40.9092 24.3174 41.0068 24.5361C41.1064 24.7529 41.1562 24.9932 41.1562 25.2568C41.1562 25.5322 41.1045 25.7812 41.001 26.0039C40.8975 26.2246 40.7539 26.4141 40.5703 26.5723C40.3887 26.7285 40.1719 26.8496 39.9199 26.9355C39.6699 27.0195 39.3984 27.0615 39.1055 27.0615C38.9805 27.0615 38.8564 27.0537 38.7334 27.0381C38.6123 27.0225 38.4951 27.001 38.3818 26.9736C38.2705 26.9463 38.165 26.9141 38.0654 26.877C37.9678 26.8379 37.8809 26.7959 37.8047 26.751V28.4121ZM37.8047 25.9131C37.8926 25.9834 37.9854 26.043 38.083 26.0918C38.1807 26.1406 38.2803 26.1807 38.3818 26.2119C38.4834 26.2432 38.5859 26.2666 38.6895 26.2822C38.793 26.2959 38.8936 26.3027 38.9912 26.3027C39.1904 26.3027 39.3672 26.2764 39.5215 26.2236C39.6777 26.1689 39.8086 26.0947 39.9141 26.001C40.0215 25.9072 40.1035 25.7969 40.1602 25.6699C40.2168 25.543 40.2451 25.4053 40.2451 25.2568C40.2451 25.1182 40.2168 24.9873 40.1602 24.8643C40.1055 24.7412 40.0254 24.6338 39.9199 24.542C39.8164 24.4482 39.6904 24.375 39.542 24.3223C39.3955 24.2676 39.2305 24.2402 39.0469 24.2402C38.9297 24.2402 38.8125 24.252 38.6953 24.2754C38.5781 24.2969 38.4648 24.3281 38.3555 24.3691C38.248 24.4102 38.1465 24.46 38.0508 24.5186C37.957 24.5771 37.875 24.6426 37.8047 24.7148V25.9131ZM43.7988 24.6826C43.7988 24.3564 43.8604 24.0527 43.9834 23.7715C44.1064 23.4883 44.2842 23.2432 44.5166 23.0361C44.751 22.8271 45.0361 22.6631 45.3721 22.5439C45.71 22.4248 46.0918 22.3652 46.5176 22.3652C46.8906 22.3652 47.2324 22.4033 47.543 22.4795C47.8555 22.5537 48.1455 22.668 48.4131 22.8223L47.9854 23.5254C47.9053 23.4727 47.8125 23.4258 47.707 23.3848C47.6035 23.3438 47.4922 23.3096 47.373 23.2822C47.2559 23.2529 47.1338 23.2305 47.0068 23.2148C46.8818 23.1992 46.7578 23.1914 46.6348 23.1914C46.3379 23.1914 46.0732 23.2285 45.8408 23.3027C45.6084 23.375 45.4121 23.4775 45.252 23.6104C45.0938 23.7412 44.9727 23.8984 44.8887 24.082C44.8066 24.2637 44.7656 24.4639 44.7656 24.6826C44.7656 24.9092 44.8086 25.1172 44.8945 25.3066C44.9805 25.4961 45.1045 25.6602 45.2666 25.7988C45.4307 25.9355 45.6299 26.043 45.8643 26.1211C46.1006 26.1973 46.3672 26.2354 46.6641 26.2354C46.7988 26.2354 46.9326 26.2256 47.0654 26.2061C47.1982 26.1865 47.3262 26.1602 47.4492 26.127C47.5742 26.0918 47.6943 26.0508 47.8096 26.0039C47.9248 25.9551 48.0322 25.9023 48.1318 25.8457L48.5596 26.5488C48.3096 26.709 48.0205 26.835 47.6924 26.9268C47.3643 27.0166 47.0156 27.0615 46.6465 27.0615C46.1758 27.0615 45.7627 27.001 45.4072 26.8799C45.0518 26.7568 44.7549 26.5889 44.5166 26.376C44.2783 26.1611 44.0986 25.9092 43.9775 25.6201C43.8584 25.3291 43.7988 25.0166 43.7988 24.6826ZM49.585 22.4209H53.4844V23.2354H50.5137V24.1494H53.1445V24.9141H50.5137V26.1885H53.5459V27H49.585V22.4209ZM54.2988 24.6826C54.2988 24.3564 54.3604 24.0527 54.4834 23.7715C54.6064 23.4883 54.7842 23.2432 55.0166 23.0361C55.251 22.8271 55.5361 22.6631 55.8721 22.5439C56.21 22.4248 56.5918 22.3652 57.0176 22.3652C57.3906 22.3652 57.7324 22.4033 58.043 22.4795C58.3555 22.5537 58.6455 22.668 58.9131 22.8223L58.4854 23.5254C58.4053 23.4727 58.3125 23.4258 58.207 23.3848C58.1035 23.3438 57.9922 23.3096 57.873 23.2822C57.7559 23.2529 57.6338 23.2305 57.5068 23.2148C57.3818 23.1992 57.2578 23.1914 57.1348 23.1914C56.8379 23.1914 56.5732 23.2285 56.3408 23.3027C56.1084 23.375 55.9121 23.4775 55.752 23.6104C55.5938 23.7412 55.4727 23.8984 55.3887 24.082C55.3066 24.2637 55.2656 24.4639 55.2656 24.6826C55.2656 24.9092 55.3086 25.1172 55.3945 25.3066C55.4805 25.4961 55.6045 25.6602 55.7666 25.7988C55.9307 25.9355 56.1299 26.043 56.3643 26.1211C56.6006 26.1973 56.8672 26.2354 57.1641 26.2354C57.2988 26.2354 57.4326 26.2256 57.5654 26.2061C57.6982 26.1865 57.8262 26.1602 57.9492 26.127C58.0742 26.0918 58.1943 26.0508 58.3096 26.0039C58.4248 25.9551 58.5322 25.9023 58.6318 25.8457L59.0596 26.5488C58.8096 26.709 58.5205 26.835 58.1924 26.9268C57.8643 27.0166 57.5156 27.0615 57.1465 27.0615C56.6758 27.0615 56.2627 27.001 55.9072 26.8799C55.5518 26.7568 55.2549 26.5889 55.0166 26.376C54.7783 26.1611 54.5986 25.9092 54.4775 25.6201C54.3584 25.3291 54.2988 25.0166 54.2988 24.6826Z'
            fill='black'
          />
        </svg>
      </div>

      <ul class='flex items-center'>
        <Navlink linkText='Blog' linkAddress='#blog' />
        <Navlink linkText='Event' linkAddress='#event' />
        <Navlink linkText='Team' linkAddress='#team' />
        <Navlink linkText='About' linkAddress='#about' />

        <button class='text-sm text-white bg-black rounded-md px-5 py-[6px] hover:bg-white hover:rounded-none border-2 box-border hover:text-black border-black cursor-pointer'>
          JoinUs
        </button>
      </ul>
    </nav>
  )
}

export default Nav
