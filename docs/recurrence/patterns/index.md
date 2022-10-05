<script setup>
import ColoredText from '../../../src/components/ColoredText.vue'
</script>

# Patterns

## Why?

### Universe

In the space and time there is matter and energy.

[Universe](./assets/universo.svg): _Diagram of the universe objects and classes_

### Senses

Where existing living beings have the ability to perceive **external and internal physical stimulations** through certain **organs** that are passed to our **nervous system**:

- **sight**
- **hearing**
- smell
- taste
- touch

**Physical signals** that can **vary in their frequency, width**, ... and transform in **different color values** decomposed into combinations of red, green and blue or **different values of words** decomposed into phonemes, a, ae, e, i, o , u, ... depending on the language.

![Light spectrum](./assets/light.jpeg)
_Light spectrum_

### Measurement units

_Basic units_

| Physics                       | Other areas                                |
| ----------------------------- | ------------------------------------------ |
| **International Unit System** | **Economic system, Educational System...** |
| Time: second                  | Music: Pulse                               |
| Length: meter                 | Education: subject                         |
| Mass: kilogram                | Money euro, dollar                         |

_Derived units_

| Physics                            | Other areas                                |
| ---------------------------------- | ------------------------------------------ |
| **International Unit System**      | **Economic system, Educational System...** |
| Force: newton (mass\*length/time2) | Music: Compass                             |
| ...                                | Maths: complex number, vector...           |

_Names_

| Physics                       | Other areas                                |
| ----------------------------- | ------------------------------------------ |
| **International Unit System** | **Economic system, Educational System...** |
| Multiples: kilometer          | Music: Salsa, trap...                      |
| Time: year, month, week       | Education: graduated                       |
| Distance: light year          | Computer science: kilobyte, petabyte...    |

_Relations_

| Value                    | Roman        | Decimal | Binary |
| ------------------------ | ------------ | ------- | ------ |
| 0                        | Non existent | 0       | 0      |
| next(0)                  | I            | 1       | 1      |
| next( next(0))           | II           | 2       | 10     |
| ...                      | ...          | ...     | ...    |
| next( next( next(0)))... | XII          | 12      | 1100   |
| ...                      | ...          | ...     | ...    |

## What?

What is a pattern?

> Pattern, model that is used to get an equal thing

Pattern for an artisan and in industry:

![Cloth pattern](./assets/clothPattern.jpg)

Pattern in science:

![Parabolic throw](./assets/parabolicThrow.jpg)

### Equality

| Body/Entity                       | Identity                                                                    |
| --------------------------------- | --------------------------------------------------------------------------- |
| What it is, exists or can exist   | Set of characteristics that differentiates something or someone from others |
| What makes something's essence be | Conscience that someone or a group has to be their own and not other        |

| Equal                                                                               | Context                                                                       |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| That has the same characteristics of another person or thing in some or all aspects | Precision: necessary to provide the grade of precision when comparing quality |
| Of the same class or condition                                                      | Identifier: people's names or nicknames, concepts, my first child...          |
| Of the same value or preciousness                                                   |                                                                               |

## For what?

For what do we need patterns?

**To be able from the present, study the past and predict/imagine the future.**

## How?

### Pattern types

#### Recurrent

It will eventually repeat. Example of recurrent pattern would be the rain. You dont know when but it will eventually rain at some point.

#### Iterative

It repeats, the end of one iteration directly connects with the beginning of a new one. Example of an iterative pattern would be day and night.

#### Recursive

It repeats in itself. You can amplify or reduce its point of view and it will replicate the same structure.

### Recursion everywhere

We can find examples of recursion in nature

![Caracola](./assets/caracola.jpg)
_Caracola_

![Brocoli](./assets/brecoli.jfif)
_Brocoli_

In our daily life
::: v-pre
`<Insert image here>`
:::

In art
::: v-pre
`<Insert image here>`
:::

## Simple Patterns

| <ColoredText text="Line" color="blue"/> | <ColoredText text="Three points" color="green"/> | <ColoredText text="Circle" color="red"/> |
| --------------------------------------- | ------------------------------------------------ | ---------------------------------------- |
| ![Line](./assets/linea.png)             | ![Triangle](./assets/triangulo.png)              | ![Circle](./assets/circulo.png)          |
| Sequence                                | Alternation                                      | Circularity                              |

## Patterns in software

### Data types

| <ColoredText text="Line" color="blue"/> | <ColoredText text="Three points" color="green"/> | <ColoredText text="Circle" color="red"/>  |
| --------------------------------------- | ------------------------------------------------ | ----------------------------------------- |
| Class                                   | Inheritance, composition, union                  | Circular dependencies, circular relations |

### Data structures

| <ColoredText text="Line" color="blue"/> | <ColoredText text="Three points" color="green"/> | <ColoredText text="Circle" color="red"/> |
| --------------------------------------- | ------------------------------------------------ | ---------------------------------------- |
| List                                    | Tree, Hierarchy                                  | Graph                                    |

### Flow control sentences

| <ColoredText text="Line" color="blue"/>            | <ColoredText text="Three points" color="green"/>    | <ColoredText text="Circle" color="red"/>            |
| -------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| Sequential sentence                                | Alternant sentence                                  | Iterative sentence                                  |
| <!--@include: ./prettier-ignore/SequenceCode.md--> | <!--@include: ./prettier-ignore/AlternantCode.md--> | <!--@include: ./prettier-ignore/IterativeCode.md--> |

### Development methodologies

| <ColoredText text="Line" color="blue"/>      | <ColoredText text="Three points" color="green"/>  | <ColoredText text="Circle" color="red"/>     |
| -------------------------------------------- | ------------------------------------------------- | -------------------------------------------- |
| <ColoredText text="Waterfall" color="blue"/> | <ColoredText text="Crystal Clear" color="green"/> | <ColoredText text="Iteratives" color="red"/> |
| ![Waterfall](./assets/waterfall.jpg)         | ![Crystal clear](./assets/crystalClear.jpg)       | ![XP](./assets/xp.png)                       |

## Domain model

The **domain model** describes the **most important concepts (types of objects)** of a context, things like objects from the domain and the relations between them.

- **Business objects** that represent things that are manipulated by the business.
- **Real world objects and concepts** which a system has to keep track of.
- **Events** that will or have already occur.

With the objective of

- **Comprehend the structure and dynamics** of the organization in which the system will be developed.
- **Comprehend the latest problems** of the target organization.
- Ensure that **clients**, **final users** and **developers** have a **common comprehension** of the target organization.
- Obtain the **requirements** of the system to help the target organization.
