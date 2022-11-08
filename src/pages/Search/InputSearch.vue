<template>
    <select name="options--search" id="searchs" class='search__bar--options'>
        <option value="Từ khóa bất kỳ" require>Từ khóa bất kỳ</option>
        <option value="Nhan đề">Nhan đề</option>
        <option value="Tác giả">Tác giả</option>
        <option value="Nhà xuất bản">Nhà xuất bản</option>
    </select>
    <input type="search" placeholder="Nhập sách bạn muốn tìm" :value="modelValue" @input="updateModelValue"
        @keyup.enter="submit" />
    <div class='search__button'>
        <button type='button' @click="submit">
            <font-awesome-icon icon='fa-solid fa-search' />
            &nbsp; Tìm kiếm
        </button>
    </div>
</template>