<template>
<select name="options--search" id="searchs" class='search__bar--options'>
    <option value="Từ khóa bất kỳ" require>Từ khóa bất kỳ</option>
    <option value="Nhan đề">Nhan đề</option>
    <option value="Tác giả">Tác giả</option>
    <option value="Nhà xuất bản">Nhà xuất bản</option>
</select>
<input 
    type="text" 
    placeholder="Nhập sách bạn muốn tìm" 
    :value="modelValue" 
    @input="updateModelValue" 
    @keyup.enter="submit" />
<div class='search__button'>
    <button type='button' @click="submit">
        <font-awesome-icon icon='fa-solid fa-search' />
        &nbsp; Tìm kiếm
    </button>
</div>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: String,
            default: ""
        }
    },
    emits: ["submit", "update:modelValue"],
    methods: {
        updateModelValue(e) {
            this.$emit("update:modelValue", e.target.value)
        },
        submit() {
            this.$emit("submit");
        }
    }
}
</script>

<style lang="scss" scoped>
input {
    width: 57%;
    font-size: 1.5rem;
    border: none;
}

.search__button {
    margin-left: 1.2rem;

    button {
        background-color: #4396ca;
        height: 100%;
        border: none;
        width: 100%;
        display: block;
        font-size: 1.4rem;
        padding-left: 10px;
        padding-right: 10px;
    }
}

.search__bar--options {
    border: none;
    margin-right: 1.5rem;
    background-color: white;

}
</style>
