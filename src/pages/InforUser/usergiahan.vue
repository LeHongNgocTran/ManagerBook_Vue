<template>
    <p class='user--infor__title fs-2'>Thông tin gia hạn sách</p>
    <div class='information-content'>
        <table class='border shadow table table-hover text-center'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>MÃ PHIẾU MƯỢN</th>
                    <th>TRẠNG THÁI</th>
                    <th>CHI TIẾT</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>PM1</td>
                    <td>
                        <button class='btn btn-danger w-50'>Chưa trả</button>
                        <!-- <button class='btn btn-success w-50'>Đã trả</button> -->
                    </td>
                    <td>
                        <b-button v-b-modal.modal-center class='bg-transparent border-0'
                            >
                            <font-awesome-icon class='button-function text-dark' icon='fa-solid fa-circle-info' 
                            size='2x'/>
                        </b-button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>