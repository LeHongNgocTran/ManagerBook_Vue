<template>
<div class='dashboard--dwrapper'>
    <h2 class="ms-5 fs-1 py-5">DASHBOARD</h2>
    <div class='wrapper--container'>
        <div class='container-fluid'>
            <div class='row'>
                <div class='col-sm-12 col-md-6 col-lg-3 number-book'>
                    <div class='d-flex flex-row  p-5 rounded border-start border-4 border-success shadow'>
                        <div class='body-card'>
                            <h4 class='text-success'>Số lượng sách đã mượn</h4>
                            <p>5000</p>
                        </div>
                        <font-awesome-icon icon="fa-solid fa-book" size="3x" color="gray" />
                    </div>
                </div>
                <div class=' col-sm-12 col-md-6 col-lg-3 number-book'>
                    <div class='d-flex flex-row  p-5 rounded border-start border-4 border-danger shadow'>
                        <div class='body-card'>
                            <h4 class='text-danger'>Số lượng sách gia hạn</h4>
                            <p>5000</p>
                        </div>
                        <font-awesome-icon size="3x" icon="fa-solid fa-calendar" color="gray" />
                    </div>
                </div>
                <div class=' col-sm-12 col-md-6 col-lg-3 number-book'>
                    <div class='d-flex flex-row  p-5 rounded border-start border-4 border-primary shadow'>
                        <div class='body-card'>
                            <h4 class='text-primary'>Tổng sổ sách</h4>
                            <p>5000</p>
                        </div>
                        <font-awesome-icon size="3x" icon="fa-solid fa-book" color="gray" />
                    </div>
                </div>
                <div class=' col-sm-12 col-md-6 col-lg-3 number-book'>
                    <div class='d-flex flex-row  p-5 rounded border-start border-4 border-warning shadow'>
                        <div class='body-card'>
                            <h4 class='text-warning'>Số lượng người truy cận</h4>
                            <p>5000</p>
                        </div>
                        <font-awesome-icon size="3x" icon="fa-solid fa-user" color="gray" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    library
} from '@fortawesome/fontawesome-svg-core'
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';
import {
    faUser,
    faBook,
    faCalendar
} from "@fortawesome/free-solid-svg-icons";
library.add(faUser,
    faBook,
    faCalendar)
</script>

<style lang="scss">
.wrapper--container {
    margin-top: 20px;
}

.number-book {
    margin-bottom: 30px;
}

.body-card {
    width: 90%;
    text-transform: uppercase;

    h4 {
        font-weight: 700;
        font-size: 1.3rem;
    }
}
</style>
