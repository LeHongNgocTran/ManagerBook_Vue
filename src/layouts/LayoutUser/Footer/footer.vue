<template>
    <div class="footer-wrapper">
        <div class='footer-container'>
            <div class='footer-image'></div>
            <div class='footer-infor'>
                <h5>thư viện khoa công nghệ thông tin và truyền thông - đại học cần thơ</h5>
                    <p>Khu 2 - Đường 3/2 - Quận Ninh Kiều - Thành Phố Cần Thơ</p>
                    <p>Điện thoại: 02923831565</p>
                    <p>Email : vpthuvienvelcit@ctu.edu.vn</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer-wrapper{

    border-top: 5px solid #9e9e9e;
    border-radius: 10px;
    background-color: white;
}

.footer-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 40px;
    /* background: #327ef0; */
}

.footer-image{
      /* //  height: 30rem;
      
      // border: 1px solid; */
        width: 20rem;
        background: url('../../../assets/images/logoctu.png') center no-repeat ;
        background-size: contain;
}
.footer-infor h5{
    text-transform: uppercase;
    font-size: 1.5rem;
    padding-bottom: 10px;
    border-bottom: 1px solid ;       
      
}
</style>