<template>
  <div class="ba-needs-section" v-if="hosps">
    <div class="ba-needs-section__inner row column">
      <div class="row">
        <div class="ba-section-filter column small-16 medium-8 large-5">
          <div class="ba-section-filter__body">
            <h3 class="ba-section-filter__title">{{filters.title}}</h3>
            <div class="ba-section-filter__subtitle">{{filters.subtitle}}</div>
            <div class="ba-section-filter__title-label">Показувати:</div>
            <div class="ba-section-filter__filter-wrap">
              <label class="ba-section-filter__radio" v-for="(item, i) in filtersHosps" :key="i">
                <input
                  v-model="filter"
                  type="radio"
                  name="category"
                  :value="item.value"
                  :checked="item.checked"
                  data-filter-map
                />
                <span>{{item.title}} ({{item.numbers}})</span>
              </label>
            </div>
            <div class="ba-section-filter__title-label">Позначення:</div>
            <div
              class="ba-section-filter__marker"
              v-for="(item, index) in filters.marker"
              :key="index"
            >
              <svg :style="{fill: `${filters.marker[index].color}`}">
                <use xlink:href="@/assets/img/sprite.svg#marker" />
              </svg>
              {{filters.marker[index].description}}
            </div>
          </div>
        </div>
        <Map v-bind:hosps="filteredHosp" />
      </div>
    </div>
  </div>
</template>

<script>
import Map from "@/components/home/Map.vue";
export default {
  props: ["needs", "filters"],
  data() {
    return {
      hosps: null,
      filter: "all",
      filtersHosps: [
        {
          title: "Опорні лікарні",
          numbers: "232",
          value: "oporni-likarni",
          checked: false
        },
        {
          title: "Інші лікарні ",
          numbers: "53",
          value: "inshi",
          checked: false
        },
        { title: "ЗСУ", numbers: "10", value: "zsu", checked: false },
        { title: "Всі лікарні", numbers: "297", value: "all", checked: true }
      ]
    };
  },
  name: "Needs",
  components: {
    Map
  },
  created() {
    fetch("https://razomua.flywheelstaging.com/wp-json/hospitals/v1/post")
      .then(result => result.json())
      .then(data => {
        this.hosps = data;
      });
  },
  computed: {
    filteredHosp: function() {
      if (this.filter === "all") {
        return this.hosps;
      } else if (this.filter === "oporni-likarni") {
        return this.hosps.filter(t => t.acf.help === "red");
      } else if (this.filter === "inshi") {
        return this.hosps.filter(t => t.acf.help === "yellow");
      } else if (this.filter === "zsu") {
        return this.hosps.filter(t => t.acf.help === "green");
      }
      return;
    }
  }
};
</script>

<style lang="scss">
.ba-needs-section {
  background: $light-gray;
  display: flex;
  @include breakpoint(xlarge) {
    display: flex;
  }
}
.ba-section-filter {
  padding: 62px 16px 42px;
  @include breakpoint(medium) {
    padding: 80px 40px 63px;
  }
  @include breakpoint(large) {
    padding: 64px 16px 36px 72px;
  }
  &__title {
    margin: 0;
  }
  &__subtitle {
    color: $medium-gray;
    margin-bottom: 40px;
  }
  &__filter-wrap {
    margin-bottom: 40px;
  }
  &__radio {
    line-height: 1;
    display: flex;
    align-items: center;

    span {
      display: inline-flex;
      align-items: center;
      &::before {
        content: "";
        display: inline-block;
        width: 20px;
        height: 20px;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid $medium-gray;
        border-radius: 50%;
        margin-right: 10px;
      }
      &:hover::before {
        background-color: $medium-gray;
        box-shadow: inset 0 0 0 2px $white;
      }
    }
    input:active + span::before,
    input:checked + span::before {
      background-color: $primary-color;
      box-shadow: inset 0 0 0 2px $white;
    }
    & > input {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }
    & + & {
      margin-top: 16px;
    }
  }
  &__title-label {
    color: $medium-gray;
    margin-bottom: 24px;
  }
  &__marker {
    display: flex;
    align-items: center;
    & + & {
      margin-top: 16px;
    }
    svg {
      width: 16px;
      height: 20px;
      margin-right: 10px;
    }
  }
}
</style>