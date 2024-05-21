import {mount} from "@vue/test-utils";
import {expect, test} from "vitest";
import HelloWorld from "../src/components/HelloWorld.vue";
import {setupServer} from "msw/node";
import {restHandlers} from "../src/mocks/handlers";

test('Hello', context => {

    const wrapper = mount(HelloWorld, {
        props: {
            msg: 'coucou'
        }
    });



});